<?php

namespace App\Http\Controllers\Api\V1;

use App\Family;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class familyController extends Controller
{
    public function create(Request $request)
    {
        // a function to store user's information about the user's family in the DB
        if ($request->validate([
            'ageGroup' => 'required',
            'diet' => 'required',
            'pref' => 'alpha',
            'isUser' => 'required'
        ])) {
            if (Auth::check()) {
                $member = new Family();
                $member->user_id = $request->user()->id;
                $member->member_age_group = $request->ageGroup;
                $member->member_diet = $request->diet;
                $member->member_pref = $request->pref;
                $member->is_user = $request->isUser;
                $member->save();
                return response()->json(['msg' => 'member stored'], 200);
            } else {
                return response()->json(['msg' => 'please login'], 200);
            }
        } else {
            return response()->json(['msg' => 'invalid request']);
        }
    }

    public function update(Request $request)
    {
        // a function to update family members or their preferences
        if ($request->validate([
            'ageGroup' => 'required|numeric',
            'diet' => 'required|alpha_num',
            'pref' => 'alpha',
            'isUser' => 'required|boolean'
        ])) {
            if (Auth::check()) {
                $member = \App\Family::find($request->input['id']);
                $member->user_id = $request->user()->id;
                $member->member_age_group = $request->ageGroup;
                $member->member_diet = $request->diet;
                $member->member_pref = $request->pref;
                $member->is_user = $request->isUser;
                $member->save();

                return response()->json(['msg' => 'member updated'], 200);
            } else {
                return response()->json(['msg' => 'please login'], 200);
            }
        } else {
            return response()->json(['msg' => 'invalid request']);
        }
    }

    public function destroy(Request $request)
    {
        // a sinister function to destroy a family record
        if (Auth::check()) {
            Family::find($request->input['id'])->delete();
            return response()->json(['msg' => 'member destroyed'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
        Family::find($request->input['id'])->delete();
        return response()->json(['msg' => 'member destroyed'], 200);
    }

    public function get(Request $request)
    {
        if (Auth::check()) {
            Family::find($request->input['id'])->delete();
            return response()->json(['msg' => 'member destroyed'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function profile(Request $request)
    {
        // a function that returns an entire profile with data from various tables. 
        //This is to avoid making 5 requests (or more) when a user visits their profile page.
        if (Auth::check()) {
            $profile = []; //init an empty array. data will be pushed to this array.
            array_push($profile, $user = Auth::user()); //add user info to profile
            array_push($profile, $userPref = Family::where('user_id', Auth::user()->id)->where('is_user', true)->get());
            array_push($profile, $family = Family::where('user_id', Auth::user()->id)->where('is_user', false)->get()); // add family members to profile

            //will add user orders etc to profile later

            if (sizeof($profile) > 1) {
                return response()->json(['profile' => $profile], 200);
            } else {
                return response()->json(['msg' => 'please create a profile'], 400);
            }
        }
    }
}
