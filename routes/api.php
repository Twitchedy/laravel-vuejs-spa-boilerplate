<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

/**
 * V1 API
 */
Route::prefix('v1')->group(function () {
    Route::get('/hello', 'Api\HelloController@hello');
});
