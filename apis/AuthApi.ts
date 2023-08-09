// tslint:disable
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    BadRequestResponseDto,
    LoginRequestDto,
    LoginResponseDto,
    RefreshTokenRequestDto,
    RefreshTokenResponseDto,
    UnauthorizedResponseDto,
} from '../models';

export interface UserControllerLoginRequest {
    loginRequestDto: LoginRequestDto;
}

export interface UserControllerRefreshTokenRequest {
    refreshTokenRequestDto: RefreshTokenRequestDto;
}

/**
 * no description
 */
export class AuthApi extends BaseAPI {

    /**
     * Log in a user
     */
    userControllerLogin({ loginRequestDto }: UserControllerLoginRequest): Observable<LoginResponseDto>
    userControllerLogin({ loginRequestDto }: UserControllerLoginRequest, opts?: OperationOpts): Observable<AjaxResponse<LoginResponseDto>>
    userControllerLogin({ loginRequestDto }: UserControllerLoginRequest, opts?: OperationOpts): Observable<LoginResponseDto | AjaxResponse<LoginResponseDto>> {
        throwIfNullOrUndefined(loginRequestDto, 'loginRequestDto', 'userControllerLogin');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<LoginResponseDto>({
            url: '/auth/users/login',
            method: 'POST',
            headers,
            body: loginRequestDto,
        }, opts?.responseOpts);
    };

    /**
     * Refresh user tokens
     */
    userControllerRefreshToken({ refreshTokenRequestDto }: UserControllerRefreshTokenRequest): Observable<RefreshTokenResponseDto>
    userControllerRefreshToken({ refreshTokenRequestDto }: UserControllerRefreshTokenRequest, opts?: OperationOpts): Observable<AjaxResponse<RefreshTokenResponseDto>>
    userControllerRefreshToken({ refreshTokenRequestDto }: UserControllerRefreshTokenRequest, opts?: OperationOpts): Observable<RefreshTokenResponseDto | AjaxResponse<RefreshTokenResponseDto>> {
        throwIfNullOrUndefined(refreshTokenRequestDto, 'refreshTokenRequestDto', 'userControllerRefreshToken');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<RefreshTokenResponseDto>({
            url: '/auth/users/refresh-token',
            method: 'POST',
            headers,
            body: refreshTokenRequestDto,
        }, opts?.responseOpts);
    };

}
