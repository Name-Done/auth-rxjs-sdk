// tslint:disable
/**
 * Name Done - Auth Service
 * An authentication service API for Name Done
 *
 * The version of the OpenAPI document: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface RefreshTokenResponseDto
 */
export interface RefreshTokenResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    idToken: string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof RefreshTokenResponseDto
     */
    accessToken: string;
}
