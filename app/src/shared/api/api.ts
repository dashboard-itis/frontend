/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Body_import_grades_api_v1_grades_import_post */
export interface BodyImportGradesApiV1GradesImportPost {
  /** File */
  file: File | Blob;
}

/** Body_login_api_v1_auth_login_post */
export interface BodyLoginApiV1AuthLoginPost {
  /** Grant Type */
  grant_type?: string | null;
  /** Username */
  username: string;
  /**
   * Password
   * @format password
   */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string | null;
  /**
   * Client Secret
   * @format password
   */
  client_secret?: string | null;
}

/** ConfirmAccountRequest */
export interface ConfirmAccountRequest {
  /** User Id */
  user_id: number;
  /**
   * Code
   * @minLength 1
   * @maxLength 100
   */
  code: string;
}

/** CourseCreate */
export interface CourseCreate {
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** Description */
  description?: string | null;
  /** Stream Id */
  stream_id?: number | null;
  /** Teacher Id */
  teacher_id?: number | null;
}

/** CoursePublic */
export interface CoursePublic {
  /** Id */
  id?: number | null;
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** Description */
  description?: string | null;
  /** Stream Id */
  stream_id?: number | null;
  /** Teacher Id */
  teacher_id?: number | null;
}

/** CourseUpdate */
export interface CourseUpdate {
  /** Name */
  name?: string | null;
  /** Description */
  description?: string | null;
  /** Stream Id */
  stream_id?: number | null;
  /** Teacher Id */
  teacher_id?: number | null;
}

/** ErrorResponse */
export interface ErrorResponse {
  /** Code */
  code: string;
  /** Message */
  message: string;
  /** Details */
  details?: Record<string, any> | any[] | null;
}

/** GradeCreate */
export interface GradeCreate {
  /** Student Id */
  student_id: number;
  /** Course Id */
  course_id: number;
  /**
   * Score
   * @min 0
   * @max 100
   */
  score: number;
  /** Comment */
  comment?: string | null;
}

/** GradeImportError */
export interface GradeImportError {
  /** Row */
  row: number;
  /** Message */
  message: string;
}

/** GradeImportResult */
export interface GradeImportResult {
  /** Created */
  created: number;
  /** Failed */
  failed: number;
  /**
   * Errors
   * @default []
   */
  errors?: GradeImportError[];
}

/** GradePublic */
export interface GradePublic {
  /** Id */
  id?: number | null;
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Student Id */
  student_id: number;
  /** Course Id */
  course_id: number;
  /**
   * Score
   * @min 0
   * @max 100
   */
  score: number;
  /** Comment */
  comment?: string | null;
}

/** GradeUpdate */
export interface GradeUpdate {
  /** Student Id */
  student_id?: number | null;
  /** Course Id */
  course_id?: number | null;
  /** Score */
  score?: number | null;
  /** Comment */
  comment?: string | null;
}

/** GroupAnalytics */
export interface GroupAnalytics {
  /** Group Id */
  group_id: number;
  /** Average Score */
  average_score: number;
  /** Submission Rate */
  submission_rate: number;
  /** Attendance Rate */
  attendance_rate: number;
  /** Distribution */
  distribution: Record<string, number>;
  /** Trend */
  trend: TrendPoint[];
}

/** GroupCreate */
export interface GroupCreate {
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Year */
  year?: number | null;
}

/** GroupPublic */
export interface GroupPublic {
  /** Id */
  id?: number | null;
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Year */
  year?: number | null;
}

/** GroupUpdate */
export interface GroupUpdate {
  /** Name */
  name?: string | null;
  /** Year */
  year?: number | null;
}

/** LogoutResponse */
export interface LogoutResponse {
  /** Success */
  success: boolean;
}

/** MessageResponse */
export interface MessageResponse {
  /** Success */
  success: boolean;
  /** Message */
  message: string;
}

/** PaginatedResponse[CoursePublic] */
export interface PaginatedResponseCoursePublic {
  /** Items */
  items: CoursePublic[];
  /** Total */
  total: number;
  /** Skip */
  skip: number;
  /** Limit */
  limit: number;
}

/** PaginatedResponse[GroupPublic] */
export interface PaginatedResponseGroupPublic {
  /** Items */
  items: GroupPublic[];
  /** Total */
  total: number;
  /** Skip */
  skip: number;
  /** Limit */
  limit: number;
}

/** PaginatedResponse[StudentGradeResponse] */
export interface PaginatedResponseStudentGradeResponse {
  /** Items */
  items: StudentGradeResponse[];
  /** Total */
  total: number;
  /** Skip */
  skip: number;
  /** Limit */
  limit: number;
}

/** PaginatedResponse[UserPublic] */
export interface PaginatedResponseUserPublic {
  /** Items */
  items: UserPublic[];
  /** Total */
  total: number;
  /** Skip */
  skip: number;
  /** Limit */
  limit: number;
}

/** PasswordResetConfirmRequest */
export interface PasswordResetConfirmRequest {
  /** User Id */
  user_id: number;
  /**
   * Code
   * @minLength 1
   * @maxLength 100
   */
  code: string;
  /**
   * Password
   * @minLength 8
   */
  password: string;
  /**
   * Password Confirm
   * @minLength 8
   */
  password_confirm: string;
}

/** PasswordResetRequest */
export interface PasswordResetRequest {
  /**
   * Email
   * @format email
   */
  email: string;
}

/** RegisterRequest */
export interface RegisterRequest {
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * Password
   * @minLength 8
   */
  password: string;
  /**
   * First Name
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Last Name
   * @minLength 1
   * @maxLength 50
   */
  last_name: string;
  /** Group Id */
  group_id?: number | null;
}

/** RegisterResponse */
export interface RegisterResponse {
  /** Success */
  success: boolean;
}

/** StudentAnalytics */
export interface StudentAnalytics {
  /** Student Id */
  student_id: number;
  /** Average Score */
  average_score: number;
  /** Trend */
  trend: TrendPoint[];
}

/** StudentGradeResponse */
export interface StudentGradeResponse {
  /** Id */
  id: number;
  /** Student Id */
  student_id: number;
  /** Course Id */
  course_id: number;
  /** Score */
  score: number;
  /** Comment */
  comment?: string | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** Course Name */
  course_name?: string | null;
}

/** TokenResponse */
export interface TokenResponse {
  /** Access Token */
  access_token: string;
  /** Refresh Token */
  refresh_token: string;
  /**
   * Token Type
   * @default "bearer"
   */
  token_type?: string;
  /** Expires In */
  expires_in: number;
  /** Scope */
  scope: string;
}

/** TrendPoint */
export interface TrendPoint {
  /** Period */
  period: string;
  /** Average Score */
  average_score: number;
}

/** UserCreate */
export interface UserCreate {
  /**
   * Email
   * @format email
   * @maxLength 255
   */
  email: string;
  /**
   * First Name
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Last Name
   * @minLength 1
   * @maxLength 50
   */
  last_name: string;
  /** Group Id */
  group_id?: number | null;
  /**
   * Is Confirmed
   * @default false
   */
  is_confirmed?: boolean;
  /**
   * Password
   * @minLength 8
   */
  password: string;
}

/** UserPublic */
export interface UserPublic {
  /** Id */
  id?: number | null;
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Email
   * @format email
   * @maxLength 255
   */
  email: string;
  /**
   * First Name
   * @minLength 1
   * @maxLength 50
   */
  first_name: string;
  /**
   * Last Name
   * @minLength 1
   * @maxLength 50
   */
  last_name: string;
  /** Group Id */
  group_id?: number | null;
  /**
   * Is Confirmed
   * @default false
   */
  is_confirmed?: boolean;
  /** Roles */
  roles?: string[];
}

/** UserRolesUpdate */
export interface UserRolesUpdate {
  /**
   * Roles
   * @minItems 1
   */
  roles: string[];
}

/** UserUpdate */
export interface UserUpdate {
  /** Email */
  email?: string | null;
  /** First Name */
  first_name?: string | null;
  /** Last Name */
  last_name?: string | null;
  /** Group Id */
  group_id?: number | null;
  /** Password */
  password?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Dashboard ITIS
 * @version 1.0.0
 * @baseUrl http://localhost:8000
 *
 * API for academic performance analytics dashboard
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Auth
     * @name RegisterApiV1AuthRegisterPost
     * @summary Register
     * @request POST:/api/v1/auth/register
     */
    registerApiV1AuthRegisterPost: (
      data: RegisterRequest,
      params: RequestParams = {},
    ) =>
      this.request<RegisterResponse, ErrorResponse>({
        path: `/api/v1/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LoginApiV1AuthLoginPost
     * @summary Login
     * @request POST:/api/v1/auth/login
     */
    loginApiV1AuthLoginPost: (
      data: BodyLoginApiV1AuthLoginPost,
      params: RequestParams = {},
    ) =>
      this.request<TokenResponse, ErrorResponse>({
        path: `/api/v1/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.UrlEncoded,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name MeApiV1AuthMeGet
     * @summary Me
     * @request GET:/api/v1/auth/me
     * @secure
     */
    meApiV1AuthMeGet: (params: RequestParams = {}) =>
      this.request<UserPublic, ErrorResponse>({
        path: `/api/v1/auth/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RefreshApiV1AuthRefreshPost
     * @summary Refresh
     * @request POST:/api/v1/auth/refresh
     */
    refreshApiV1AuthRefreshPost: (params: RequestParams = {}) =>
      this.request<TokenResponse, ErrorResponse>({
        path: `/api/v1/auth/refresh`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ConfirmAccountLinkApiV1AuthConfirmAccountGet
     * @summary Confirm Account Link
     * @request GET:/api/v1/auth/confirm-account
     */
    confirmAccountLinkApiV1AuthConfirmAccountGet: (
      query: {
        /** User Id */
        user_id: number;
        /** Code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse, ErrorResponse>({
        path: `/api/v1/auth/confirm-account`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ConfirmAccountApiV1AuthConfirmAccountPost
     * @summary Confirm Account
     * @request POST:/api/v1/auth/confirm-account
     */
    confirmAccountApiV1AuthConfirmAccountPost: (
      data: ConfirmAccountRequest,
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse, ErrorResponse>({
        path: `/api/v1/auth/confirm-account`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RequestPasswordResetApiV1AuthPasswordResetRequestPost
     * @summary Request Password Reset
     * @request POST:/api/v1/auth/password-reset/request
     */
    requestPasswordResetApiV1AuthPasswordResetRequestPost: (
      data: PasswordResetRequest,
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse, ErrorResponse>({
        path: `/api/v1/auth/password-reset/request`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ConfirmPasswordResetApiV1AuthPasswordResetConfirmPost
     * @summary Confirm Password Reset
     * @request POST:/api/v1/auth/password-reset/confirm
     */
    confirmPasswordResetApiV1AuthPasswordResetConfirmPost: (
      data: PasswordResetConfirmRequest,
      params: RequestParams = {},
    ) =>
      this.request<MessageResponse, ErrorResponse>({
        path: `/api/v1/auth/password-reset/confirm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LogoutApiV1AuthLogoutPost
     * @summary Logout
     * @request POST:/api/v1/auth/logout
     */
    logoutApiV1AuthLogoutPost: (params: RequestParams = {}) =>
      this.request<LogoutResponse, ErrorResponse>({
        path: `/api/v1/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUsersApiV1UsersGet
     * @summary Get Users
     * @request GET:/api/v1/users/
     * @secure
     */
    getUsersApiV1UsersGet: (
      query?: {
        /**
         * Skip
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @min 1
         * @max 100
         * @default 20
         */
        limit?: number;
        /** Search */
        search?: string | null;
        /** Email */
        email?: string | null;
        /** Role */
        role?: string | null;
        /** Group Id */
        group_id?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedResponseUserPublic, ErrorResponse>({
        path: `/api/v1/users/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CreateUserApiV1UsersPost
     * @summary Create User
     * @request POST:/api/v1/users/
     * @secure
     */
    createUserApiV1UsersPost: (data: UserCreate, params: RequestParams = {}) =>
      this.request<UserPublic, ErrorResponse>({
        path: `/api/v1/users/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUserApiV1UsersUserIdGet
     * @summary Get User
     * @request GET:/api/v1/users/{user_id}
     * @secure
     */
    getUserApiV1UsersUserIdGet: (userId: number, params: RequestParams = {}) =>
      this.request<UserPublic, ErrorResponse>({
        path: `/api/v1/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUserApiV1UsersUserIdPut
     * @summary Update User
     * @request PUT:/api/v1/users/{user_id}
     * @secure
     */
    updateUserApiV1UsersUserIdPut: (
      userId: number,
      data: UserUpdate,
      params: RequestParams = {},
    ) =>
      this.request<UserPublic, ErrorResponse>({
        path: `/api/v1/users/${userId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name DeleteUserApiV1UsersUserIdDelete
     * @summary Delete User
     * @request DELETE:/api/v1/users/{user_id}
     * @secure
     */
    deleteUserApiV1UsersUserIdDelete: (
      userId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/v1/users/${userId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUserRolesApiV1UsersUserIdRolesPut
     * @summary Update User Roles
     * @request PUT:/api/v1/users/{user_id}/roles
     * @secure
     */
    updateUserRolesApiV1UsersUserIdRolesPut: (
      userId: number,
      data: UserRolesUpdate,
      params: RequestParams = {},
    ) =>
      this.request<UserPublic, ErrorResponse>({
        path: `/api/v1/users/${userId}/roles`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name GetGroupsApiV1GroupsGet
     * @summary Get Groups
     * @request GET:/api/v1/groups/
     * @secure
     */
    getGroupsApiV1GroupsGet: (
      query?: {
        /**
         * Skip
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @min 1
         * @max 100
         * @default 20
         */
        limit?: number;
        /** Search */
        search?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedResponseGroupPublic, ErrorResponse>({
        path: `/api/v1/groups/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name CreateGroupApiV1GroupsPost
     * @summary Create Group
     * @request POST:/api/v1/groups/
     * @secure
     */
    createGroupApiV1GroupsPost: (
      data: GroupCreate,
      params: RequestParams = {},
    ) =>
      this.request<GroupPublic, ErrorResponse>({
        path: `/api/v1/groups/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name GetGroupApiV1GroupsGroupIdGet
     * @summary Get Group
     * @request GET:/api/v1/groups/{group_id}
     * @secure
     */
    getGroupApiV1GroupsGroupIdGet: (
      groupId: number,
      params: RequestParams = {},
    ) =>
      this.request<GroupPublic, ErrorResponse>({
        path: `/api/v1/groups/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name UpdateGroupApiV1GroupsGroupIdPut
     * @summary Update Group
     * @request PUT:/api/v1/groups/{group_id}
     * @secure
     */
    updateGroupApiV1GroupsGroupIdPut: (
      groupId: number,
      data: GroupUpdate,
      params: RequestParams = {},
    ) =>
      this.request<GroupPublic, ErrorResponse>({
        path: `/api/v1/groups/${groupId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name DeleteGroupApiV1GroupsGroupIdDelete
     * @summary Delete Group
     * @request DELETE:/api/v1/groups/{group_id}
     * @secure
     */
    deleteGroupApiV1GroupsGroupIdDelete: (
      groupId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/v1/groups/${groupId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name GetCoursesApiV1CoursesGet
     * @summary Get Courses
     * @request GET:/api/v1/courses/
     * @secure
     */
    getCoursesApiV1CoursesGet: (
      query?: {
        /**
         * Skip
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** Search */
        search?: string | null;
        /** Name */
        name?: string | null;
        /** Stream Id */
        stream_id?: number | null;
        /** Teacher Id */
        teacher_id?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedResponseCoursePublic, ErrorResponse>({
        path: `/api/v1/courses/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CreateCourseApiV1CoursesPost
     * @summary Create Course
     * @request POST:/api/v1/courses/
     * @secure
     */
    createCourseApiV1CoursesPost: (
      data: CourseCreate,
      params: RequestParams = {},
    ) =>
      this.request<CoursePublic, ErrorResponse>({
        path: `/api/v1/courses/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name GetCourseApiV1CoursesCourseIdGet
     * @summary Get Course
     * @request GET:/api/v1/courses/{course_id}
     * @secure
     */
    getCourseApiV1CoursesCourseIdGet: (
      courseId: number,
      params: RequestParams = {},
    ) =>
      this.request<CoursePublic, ErrorResponse>({
        path: `/api/v1/courses/${courseId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name UpdateCourseApiV1CoursesCourseIdPut
     * @summary Update Course
     * @request PUT:/api/v1/courses/{course_id}
     * @secure
     */
    updateCourseApiV1CoursesCourseIdPut: (
      courseId: number,
      data: CourseUpdate,
      params: RequestParams = {},
    ) =>
      this.request<CoursePublic, ErrorResponse>({
        path: `/api/v1/courses/${courseId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name DeleteCourseApiV1CoursesCourseIdDelete
     * @summary Delete Course
     * @request DELETE:/api/v1/courses/{course_id}
     * @secure
     */
    deleteCourseApiV1CoursesCourseIdDelete: (
      courseId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/v1/courses/${courseId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analytics
     * @name GetGroupAnalyticsApiV1GroupsGroupIdAnalyticsGet
     * @summary Get Group Analytics
     * @request GET:/api/v1/groups/{group_id}/analytics
     * @secure
     */
    getGroupAnalyticsApiV1GroupsGroupIdAnalyticsGet: (
      groupId: number,
      query?: {
        /**
         * Trend Period
         * @default "semester"
         */
        trend_period?: "week" | "month" | "semester";
      },
      params: RequestParams = {},
    ) =>
      this.request<GroupAnalytics, ErrorResponse>({
        path: `/api/v1/groups/${groupId}/analytics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Analytics
     * @name GetStudentAnalyticsApiV1StudentsStudentIdAnalyticsGet
     * @summary Get Student Analytics
     * @request GET:/api/v1/students/{student_id}/analytics
     * @secure
     */
    getStudentAnalyticsApiV1StudentsStudentIdAnalyticsGet: (
      studentId: number,
      query?: {
        /**
         * Trend Period
         * @default "semester"
         */
        trend_period?: "week" | "month" | "semester";
      },
      params: RequestParams = {},
    ) =>
      this.request<StudentAnalytics, ErrorResponse>({
        path: `/api/v1/students/${studentId}/analytics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GetGradesApiV1GradesGet
     * @summary Get Grades
     * @request GET:/api/v1/grades
     * @secure
     */
    getGradesApiV1GradesGet: (
      query?: {
        /**
         * Skip
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedResponseStudentGradeResponse, ErrorResponse>({
        path: `/api/v1/grades`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name CreateGradeApiV1GradesPost
     * @summary Create Grade
     * @request POST:/api/v1/grades
     * @secure
     */
    createGradeApiV1GradesPost: (
      data: GradeCreate,
      params: RequestParams = {},
    ) =>
      this.request<GradePublic, ErrorResponse>({
        path: `/api/v1/grades`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name ImportGradesApiV1GradesImportPost
     * @summary Import Grades
     * @request POST:/api/v1/grades/import
     * @secure
     */
    importGradesApiV1GradesImportPost: (
      data: BodyImportGradesApiV1GradesImportPost,
      params: RequestParams = {},
    ) =>
      this.request<GradeImportResult, ErrorResponse>({
        path: `/api/v1/grades/import`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GetGradeApiV1GradesGradeIdGet
     * @summary Get Grade
     * @request GET:/api/v1/grades/{grade_id}
     * @secure
     */
    getGradeApiV1GradesGradeIdGet: (
      gradeId: number,
      params: RequestParams = {},
    ) =>
      this.request<StudentGradeResponse, ErrorResponse>({
        path: `/api/v1/grades/${gradeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name UpdateGradeApiV1GradesGradeIdPut
     * @summary Update Grade
     * @request PUT:/api/v1/grades/{grade_id}
     * @secure
     */
    updateGradeApiV1GradesGradeIdPut: (
      gradeId: number,
      data: GradeUpdate,
      params: RequestParams = {},
    ) =>
      this.request<GradePublic, ErrorResponse>({
        path: `/api/v1/grades/${gradeId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name DeleteGradeApiV1GradesGradeIdDelete
     * @summary Delete Grade
     * @request DELETE:/api/v1/grades/{grade_id}
     * @secure
     */
    deleteGradeApiV1GradesGradeIdDelete: (
      gradeId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, ErrorResponse>({
        path: `/api/v1/grades/${gradeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Grades
     * @name GetStudentGradesApiV1StudentsStudentIdGradesGet
     * @summary Get Student Grades
     * @request GET:/api/v1/students/{student_id}/grades
     * @secure
     */
    getStudentGradesApiV1StudentsStudentIdGradesGet: (
      studentId: number,
      query?: {
        /**
         * Skip
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedResponseStudentGradeResponse, ErrorResponse>({
        path: `/api/v1/students/${studentId}/grades`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  health = {
    /**
     * No description
     *
     * @name HealthHealthGet
     * @summary Health
     * @request GET:/health
     */
    healthHealthGet: (params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/health`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
