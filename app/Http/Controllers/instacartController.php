<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Cookie\SetCookie as CookieParser;
//use GuzzleHttp\RequestOptions;

function parse_cookies($header) {
// source https://gist.github.com/pokeb/10590
	$cookies = array();

	$cookie = new cookie();

	$parts = explode("=",$header);
	for ($i=0; $i< count($parts); $i++) {
		$part = $parts[$i];
		if ($i==0) {
			$key = $part;
			continue;
		} elseif ($i== count($parts)-1) {
			$cookie->set_value($key,$part);
			$cookies[] = $cookie;
			continue;
		}
		$comps = explode(" ",$part);
		$new_key = $comps[count($comps)-1];
		$value = substr($part,0,strlen($part)-strlen($new_key)-1);
		$terminator = substr($value,-1);
		$value = substr($value,0,strlen($value)-1);
		$cookie->set_value($key,$value);
		if ($terminator == ",") {
			$cookies[] = $cookie;
			$cookie = new cookie();
		}

		$key = $new_key;
	}
	return $cookies;
}

class cookie {
    // source https://gist.github.com/pokeb/10590
	public $name = "";
	public $value = "";
	public $expires = "";
	public $domain = "";
	public $path = "";
	public $secure = false;

	public function set_value($key,$value) {
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
        $this->baseURL = 'https://www.instacart.com';
        $this->cookieSessionName = "_instacart_session";
        $this->iCartEmail = '';
        $this->iCartPass = '';
        $this->default_store = 'Real Canadian Super Store';

    }


    public function login(Request $request){
        $this->iCartEmail = $request->instacartEmail;
        $this->iCartPass = $request->instacartPassword;

        $client = Http::post($this->baseURL . '/v3/dynamic_data/authenticate/login?source=mobile_web&cache_key=undefined', [
            'scope' => [
                'email' => $request->instacartEmail,
                'password' => $request->instacartPassword
            ]
        ]);
        $cookies = parse_cookies($client->header('set-cookie'));
        var_dump($cookies[4]->value);
        $instaSession = $cookies;
        return view('development.interface',['body' => '$instaSession']);
    }

    public function search(Request $request){
        //search API based on request
    }

    public function AddAllToCart(Request $request){
        //add all ingredients to cart
    }

    public function setAddress(){
        // a function to set delivery address
    }

    public function checkout(){
        // a function to process order
    }
}

