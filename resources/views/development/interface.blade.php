@extends('layouts.app')

@section('content')
    @auth
        <div id="app">
            <app/>
        </div>
    @endauth
@endsection
