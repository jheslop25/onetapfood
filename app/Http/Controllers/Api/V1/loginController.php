<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Laravel\Passport\Token;

class loginController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($login)) {
            return response(['msg' => 'invalid cred'], 401);
        }

        $accessToken = Auth::user()->createToken('authToken');

        return response(['user' => Auth::user(), 'access_token' => $accessToken]);
    }

    public function logout(Request $request)
    { // may need to refactor
        if ($request->validate([
            'userID' => 'required'
        ])) {
            Token::where('user_id', $request->userID)->delete();
            return response(['msg' => 'you have logged out'], 200);
        } else {
            return response(['msg' => 'logout failed'], 400);
        }
    }

    public function users(Request $request)
    {
        return User::all();
    }

    public function getSetupIntent(Request $request)
    {
        return $request->user()->createSetupIntent();
    }

    public function postPaymentMethods(Request $request)
    {
        $user = $request->user();
        $paymentMethodID = $request->get('payment_method');

        if ($user->stripe_id == null) {
            $user->createAsStripeCustomer();
        }

        $user->addPaymentMethod($paymentMethodID);
        $user->updateDefaultPaymentMethod($paymentMethodID);

        return response()->json(null, 204);
    }

    public function getPaymentMethods(Request $request)
    {
        $user = $request->user();

        $methods = array();

        if ($user->hasPaymentMethod()) {
            foreach ($user->paymentMethods() as $method) {
                array_push($methods, [
                    'id' => $method->id,
                    'brand' => $method->card->brand,
                    'last_four' => $method->card->last4,
                    'exp_month' => $method->card->exp_month,
                    'exp_year' => $method->card->exp_year,
                ]);
            }
        }

        return response()->json($methods);
    }
}
