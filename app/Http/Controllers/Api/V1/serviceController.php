<?php

namespace App\Http\Controllers\Api\V1;

use App\Complaint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class serviceController extends Controller
{
    public function makeComplaint(Request $request){
        // a function for filling a service ticket
        if(Auth::check()){
            if(Complaint::where('user_id', Auth::user()->id)->get()){ //check for existing complaint
                return response()->json(['msg'=> 'complaint already in process'], 403);
            } else {
                $comp = new Complaint();
                $comp->user_id = Auth::user()->id;
                $comp->category = $request->input['category'];
                $comp->content = $request->input['content'];
                $comp->status = 'new';
                $comp->response = 'waiting';
                $comp->emp_id = 'none';
                $comp->save();

                return response()->json(['msg'=> 'comp filed'], 200);
            }
        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }

    public function cancelComplaint(Request $request){
        // a function for cancelling a complaint
        if(Auth::check()){
            $comp = Complaint::where('user_id', Auth::user()->id)->get();
            $comp->status = 'canceled by user';
            $comp->save();

            return response()->json(['msg' => 'comp canceled'], 200);

        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }

    public function getComplaint(Request $request){
        // a function for getting a complaint by ID -- meant for service interface
        if(Auth::check() && Auth::user()->type == 'service'){ //this is for a service dept employee to get a customer complaint
            $comp = Complaint::where('user_id', $request->input['user_id']);
            return response()->json(['comp' => $comp], 200);
        } elseif(Auth::check() && Auth::user()->type == 'cust'){ // this is for a customer checking in on their complaint
            $comp = Complaint::where('user_id', Auth::user()->id);
            return response()->json(['comp' => $comp], 200);
        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }

    public function resolve(Request $request){
        //a function for resolving complaint
        if(Auth::check() && Auth::user()->type == 'service'){
            $comp = Complaint::find($request->input['user_id']);
            $comp->category = $request->input['category'];
            $comp->content = $request->input['content'];
            $comp->status = 'resolved';
            $comp->response = $request->input['resp'];
            $comp->emp_id = Auth::user()->id;
            $comp->save();

            return response()->json(['msg'=> 'comp resolved'], 200);
        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }

    public function update(Request $request){
        //a function for updating a complaint
        if(Auth::check() && Auth::user()->type == 'service'){ //this is for a service dept employee to update a customer complaint
            $comp = Complaint::where('user_id', $request->input['user_id']);
            $comp->category = $request->input['category'];
            $comp->content = $request->input['content'];
            $comp->status = 'updated';
            $comp->response = $request->input['resp'];
            $comp->emp_id = Auth::user()->id;
            $comp->save();
            return response()->json(['comp' => $comp], 200);
        } elseif(Auth::check() && Auth::user()->type == 'cust'){ // this is for a customer updating their complaint
            $comp = Complaint::where('user_id', Auth::user()->id);
            $comp->category = $request->input['category'];
            $comp->content = $request->input['content'];
            $comp->status = 'updated';
            $comp->save();
            return response()->json(['comp' => $comp], 200);
        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }

    public function getList(Request $request){
        // a function for getting all complaints by date
        if(Auth::check() && Auth::user()->type == 'service'){
            $comps = Complaint::all();
            return response()->json(['comps' => $comps], 200);
        } else {
            return response()->json(['msg' => 'unauthorized user'], 403);
        }
    }
}
