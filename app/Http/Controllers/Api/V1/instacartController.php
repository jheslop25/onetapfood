<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Cookie\SetCookie as CookieParser;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

function parse_cookies($header)
{
    // source https://gist.github.com/pokeb/10590
    $cookies = array();

    $cookie = new cookie();

    $parts = explode("=", $header);
    for ($i = 0; $i < count($parts); $i++) {
        $part = $parts[$i];
        if ($i == 0) {
            $key = $part;
            continue;
        } elseif ($i == count($parts) - 1) {
            $cookie->set_value($key, $part);
            $cookies[] = $cookie;
            continue;
        }
        $comps = explode(" ", $part);
        $new_key = $comps[count($comps) - 1];
        $value = substr($part, 0, strlen($part) - strlen($new_key) - 1);
        $terminator = substr($value, -1);
        $value = substr($value, 0, strlen($value) - 1);
        $cookie->set_value($key, $value);
        if ($terminator == ",") {
            $cookies[] = $cookie;
            $cookie = new cookie();
        }

        $key = $new_key;
    }
    return $cookies;
}

class cookie
{
    // source https://gist.github.com/pokeb/10590
    public $name = "";
    public $value = "";
    public $expires = "";
    public $domain = "";
    public $path = "";
    public $secure = false;

    public function set_value($key, $value)
    {
        switch (strtolower($key)) {
            case "expires":
                $this->expires = $value;
                return;
            case "domain":
                $this->domain = $value;
                return;
            case "path":
                $this->path = $value;
                return;
            case "secure":
                $this->secure = ($value == true);
                return;
        }
        if ($this->name == "" && $this->value == "") {
            $this->name = $key;
            $this->value = $value;
        }
    }
}



class instacartController extends Controller
{

    public function __construct()
    {
        $this->baseURL = 'https://www.instacart.ca';
        $this->cookieSessionName = "_instacart_session";
        $this->default_store = 'Real Canadian Super Store';
    }


    public function login(Request $request)
    {
        //return response()->json(['msg' => 'the auth works'], 200);
        if (Auth::check()) {
            $client = Http::post($this->baseURL . '/v3/dynamic_data/authenticate/login?source=mobile_web&cache_key=undefined', [
                    'email' => $request->input['email'],
                    'password' => $request->input['password']
            ]);
            $cookies = parse_cookies($client->header('set-cookie'));
            $body = $client->body();
            return response()->json(['_instacart_session' => $cookies[4]->value, 'body' => $body]);
        } else {
            return response()->json(['msg' => 'unauthorized'], 401);
        }
    }

    public function search(Request $request)
    {
        if (Auth::check()) {
            $cookie = $request->input['cookie'];
            $query = $request->input['query'];
            $client = Http::withHeaders([
                'cookie' => '_instacart_session=' . $cookie,
                'X-Requested-With' => 'XMLHttpRequest',
                'Content-Type' => 'application/json',
                'Sec-Fetch-Mode' => 'cors',
                'Sec-Fetch-dest' => 'empty',
                'Accept' => 'application/json',
                'Accept-Language' => 'en-US,en;q=0.9'
            ])->get($this->baseURL . '/v3/containers/real-canadian-superstore/search_v3/' . $query);
            $result = $client->body();
            return response()->json(['res' => $result], 200);
            // return response()->json(['res' => ['q' => $query, 'c' => $cookie]],200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function getInstacartUser(Request $request){
        //a function that returns an authenticated user's info from instacart

        $cookie = $request->input['cookie']; // a string with the instacart session cookie
        $client = Http::withHeaders([
            'cookie' => '_instacart_session=' . $cookie,
            'Sec-Fetch-Mode' => 'navigate',
            'Sec-Fetch-dest' => 'document',
            'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Accept-Language' => 'en-US,en;q=0.9',
            'Authority' => 'www.instacart.ca'
        ])->get($this->baseURL . '/onboarding');



        $reg = '/"user_id":(.*)};/m';
        $string = $client->body();
        preg_match_all($reg, $string, $matches, PREG_SET_ORDER, 0);
        if($matches[0]){
            //do some stuff
            $userID = $matches[0][1];

            $response = Http::withHeaders([
                'cookie' => '_instacart_session=' . $cookie,
                'X-Requested-With' => 'XMLHttpRequest',
                'Content-Type' => 'application/json',
                'X-Client-Identifier' => 'web',
                'Accept' => 'application/json',
                'Accept-Language' => 'en-US,en;q=0.9'
            ])->post($this->baseURL . '/v3/users/' . $userID . '/track_segment',[
                'adblock_presence' => 'false'
            ]);

            return response()->json(['user' => $response->body()], 200);
        } else {
            return response(['msg' => 'no userID was returned'], 400);
        }
    }

    public function AddAllToCart(Request $request)
    {
        //add all ingredients to cart
        if (Auth::check()) {
            $items = $request->input['items'];
            $cookie = $request->input['cookie'];
            $cartID = $request->input['cartID'];
            $client = Http::withHeaders([
                'cookie' => '_instacart_session=' . $cookie,
                'x-requested-with' => 'XMLHttpRequest',
                'content-type' => 'application/json',
                'sec-Fetch-site' => 'same-origin',
                'sec-Fetch-Mode' => 'cors',
                'sec-Fetch-dest' => 'empty',
                'x-client-identifier' => 'web',
                'accept' => 'application/json',
                'accept-language' => 'en-US,en;q=0.9'
            ])->put($this->baseURL . '/v3/carts/' . $cartID . '/update_items', [
                'items' => $items
            ]);
            if($client->ok()){
                return response()->json(['msg' => 'items added successfully', 'body' => $client->body()]);
            } else {
                return response(['msg' => 'something went wrong', 'err' => $client->body()], 400);
            }
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function setAddress(Request $request)
    {
        // a function to set delivery address
        if (Auth::check()) {
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function checkout(Request $request)
    {
        // a function to process order
        if (Auth::check()) {
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function price()
    {
        // a function for a daily price comparison between our vendors and instacart
        if (Auth::check()) {
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }


}
