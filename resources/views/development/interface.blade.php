@extends('layouts.app')

@section('content')
    @auth
        <div class="card m-5 p-4">
            <p>this is the instacart development interface</p>
        <div>this is where I will display some results{{ $body ?? '' }}</div>
        </div>

    @endauth
@endsection
