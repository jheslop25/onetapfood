@extends('layouts.app')

@section('content')
    @auth
        <form class="card m-3 p-3" action="/callAPI" method="POST">
            @csrf
            <input class="m-1" type="email" name="instacartEmail" id="ICE" placeholder="Enter Instacart Email">
            <input class="m-1" type="password" name="instacartPassword" id="ICP" placeholder="Enter Instacart Password">
            <input class="btn btn-primary" type="submit" value="submit">
        </form>
    @endauth
@endsection
