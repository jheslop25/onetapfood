<?php

namespace App\Http\Controllers;

use App\Family;
use Illuminate\Http\Request;

class familyController extends Controller
{
    public function create(Request $request)
    {
        // a function to store user's information about the user's family in the DB
        if (Auth::check()) {
            $member = new Family();
            $member->user_id = $request->user()->id;
            $member->member_age_group = $request->input['ageGroup'];
            $member->member_diet = $request->input['diet'];
            $member->member_pref = $request->input['pref'];
            $member->save();
            return response()->json(['msg' => 'member stored'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
        }
    }

    public function update(Request $request)
    {
        // a function to update family members or their preferences
        if (Auth::check()) {
            $member = \App\Family::find($request->input['id']);
            $member->user_id = $request->user()->id;
            $member->member_age_group = $request->input['ageGroup'];
            $member->member_diet = $request->input['diet'];
            $member->member_pref = $request->input['pref'];
            $member->save();

            return response()->json(['msg' => 'member updated'], 200);
        } else {
            return response()->json(['msg' => 'please login'], 200);
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
}
