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
                'scope' => [
                    'email' => $request->input['email'],
                    'password' => $request->input['password']
                ]
            ]);
            $cookies = parse_cookies($client->header('set-cookie'));
            return response()->json(['_instacart_session' => $cookies[4]->value]);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function search(Request $request)
    {
        if (Auth::check()) {
            $cookie = $request->input['instacart'];
            $client = Http::withHeaders([
                'Cookie' => '_instacart_session' . $cookie,
                'X-Requested-With' => 'XMLHttpRequest',
                'Content-Type' => 'application/json'
            ])->get($this->baseURL . '/v3/containers/real-canadian-superstore/search_v3/' . $request->input['query']);
            $result = $client->body();
            return response()->json(['res' => $result], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function AddAllToCart(Request $request)
    {
        //add all ingredients to cart
        if (Auth::check()) {
            $cookie = $request->input['instacart'];
            foreach($request->input['list'] as $item){
                $response = Http::withHeaders()->put($this->baseURL.'/v3/carts/54133112/update_items?source=web',[
                    // data here
                    'items' => [
                        [
                            "item_id" => $item['item_id'],
                            "quantity" => $item['quant'],
                            "source_type" => 'search',
                            "source_value" => $item['item_name']
                        ]
                    ]
                ]);
                if($response->ok()){
                    return response()->json(['msg' => 'all items added to cart'], 200);
                } else {
                    return response()->json(['msg' => 'something went wrong'], $response->status());
                }
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
