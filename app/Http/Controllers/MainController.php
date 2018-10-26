<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class MainController extends Controller
{
    public function homeIndex() {
      return view('index');
    }

    public function contactsIndex() {
      return view('contacts');
    }

    public function profileIndex() {
    	return view('profile');
    }
    public function plIndex() {
    	return view('pl');
    }
}
