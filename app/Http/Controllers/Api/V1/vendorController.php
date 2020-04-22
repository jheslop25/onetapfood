<?php

namespace App\Http\Controllers\Api\V1;

use App\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class vendorController extends Controller
{
    public function newOrUpdate(Request $request){
        if (Auth::check() && Auth::user()->type == 'vend'){
            $vend = Vendor::updateOrCreate(
                [
                    'user_id' => Auth::user()->id,
                    'vendor_name' => $request->input['name'],
                    'emerg_phone' => $request->input['phone'],
                    'info' => $request->input['info']
                ]
            );

            return response()->json(['msg' => 'success'], 200);
        } else {
            return response()->json(['msg' => 'unauthorized'], 401);
        }
    }

    public function delete(Request $request){
        if (Auth::check() && Auth::user()->type == 'vend'){
            Vendor::where('user_id', Auth::user()->id)->delete();
            return response()->json(['msg' => 'vendor deleted'], 200);
        } else {
            return response()->json(['msg' => 'unauthorized'], 401);
        }
    }
}
