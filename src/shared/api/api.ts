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

export interface ErrorResponse {
  /**
   * @format date-time
   * @example "2026-03-12T12:00:00Z"
   */
  timestamp: string
  /** @example 400 */
  status: number
  /** @example "INVALID_REQUEST" */
  error: string
  /** @example "Malformed request syntax" */
  message: string
  /** @example "/users" */
  path: string
}

export interface TokenResponse {
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
  access_token: string
  /** @example "bearer" */
  token_type: string
  /** @example 86400 */
  expires_in: number
  /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
  refresh_token: string
  /** @example "student curator" */
  scope: string
}

export interface User {
  /** @example 1 */
  id: number
  /**
   * @format email
   * @example "student@university.edu"
   */
  email: string
  /** @example "John" */
  first_name: string
  /** @example "Doe" */
  last_name: string
  /** @example "STUDENT" */
  role: 'STUDENT' | 'CURATOR' | 'ADMIN'
  /** @example 3 */
  group_id?: number | null
  /**
   * @format date-time
   * @example "2026-01-15T10:30:00Z"
   */
  created_at: string
}

export interface CreateUserRequest {
  /**
   * @format email
   * @minLength 5
   * @maxLength 100
   * @example "student@university.edu"
   */
  email: string
  /**
   * @format password
   * @minLength 8
   * @example "securePass123"
   */
  password: string
  /**
   * @minLength 1
   * @maxLength 50
   * @example "John"
   */
  first_name: string
  /**
   * @minLength 1
   * @maxLength 50
   * @example "Doe"
   */
  last_name: string
  /** @example "STUDENT" */
  role: 'STUDENT' | 'CURATOR' | 'ADMIN'
  /** @example 3 */
  group_id?: number | null
}

export interface UpdateUserRequest {
  /**
   * @format email
   * @example "student@university.edu"
   */
  email?: string
  /**
   * @format password
   * @minLength 8
   * @example "newSecurePass123"
   */
  password?: string
  /**
   * @minLength 1
   * @maxLength 50
   * @example "John"
   */
  first_name?: string
  /**
   * @minLength 1
   * @maxLength 50
   * @example "Doe"
   */
  last_name?: string
  /** @example "STUDENT" */
  role?: 'STUDENT' | 'CURATOR' | 'ADMIN'
  /** @example 3 */
  group_id?: number | null
}

export interface UserPage {
  /** @example 150 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: User[]
}

export interface Group {
  /** @example 1 */
  id: number
  /** @example "CS-2026" */
  name: string
  /** @example 2026 */
  year: number
  /** @example "Computer Science undergraduate group" */
  description?: string | null
  /**
   * @format date-time
   * @example "2026-01-15T10:30:00Z"
   */
  created_at: string
}

export interface CreateGroupRequest {
  /**
   * @minLength 1
   * @maxLength 100
   * @example "CS-2026"
   */
  name: string
  /**
   * @min 2000
   * @max 2100
   * @example 2026
   */
  year: number
  /** @example "Computer Science undergraduate group" */
  description?: string | null
}

export interface UpdateGroupRequest {
  /**
   * @minLength 1
   * @maxLength 100
   * @example "CS-2026"
   */
  name?: string
  /**
   * @min 2000
   * @max 2100
   * @example 2026
   */
  year?: number
  /** @example "Updated description" */
  description?: string | null
}

export interface GroupPage {
  /** @example 25 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Group[]
}

export interface Stream {
  /** @example 1 */
  id: number
  /** @example 1 */
  group_id: number
  /** @example 1 */
  semester: number
  /** @example 2026 */
  year: number
}

export interface CreateStreamRequest {
  /** @example 1 */
  group_id: number
  /**
   * @min 1
   * @max 2
   * @example 1
   */
  semester: number
  /**
   * @min 2000
   * @max 2100
   * @example 2026
   */
  year: number
}

export interface UpdateStreamRequest {
  /** @example 1 */
  group_id?: number
  /**
   * @min 1
   * @max 2
   * @example 1
   */
  semester?: number
  /**
   * @min 2000
   * @max 2100
   * @example 2026
   */
  year?: number
}

export interface StreamPage {
  /** @example 8 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Stream[]
}

export interface Course {
  /** @example 101 */
  id: number
  /** @example "Mathematics 101" */
  name: string
  /** @example 1 */
  stream_id: number
  /** @example 10 */
  teacher_id: number
  /** @example "Introductory course in mathematics" */
  description?: string | null
  /**
   * @format date-time
   * @example "2026-01-15T10:30:00Z"
   */
  created_at: string
}

export interface CreateCourseRequest {
  /**
   * @minLength 1
   * @maxLength 150
   * @example "Mathematics 101"
   */
  name: string
  /** @example 1 */
  stream_id: number
  /** @example 10 */
  teacher_id: number
  /** @example "Introductory course in mathematics" */
  description?: string | null
}

export interface UpdateCourseRequest {
  /**
   * @minLength 1
   * @maxLength 150
   * @example "Mathematics 101 Advanced"
   */
  name?: string
  /** @example 1 */
  stream_id?: number
  /** @example 10 */
  teacher_id?: number
  /** @example "Advanced mathematics course" */
  description?: string | null
}

export interface CoursePage {
  /** @example 12 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Course[]
}

export interface Assignment {
  /** @example 201 */
  id: number
  /** @example "Homework 1" */
  title: string
  /** @example "Solve exercises 1-10" */
  description?: string | null
  /** @example 101 */
  course_id: number
  /** @example 10 */
  teacher_id: number
  /** @example 100 */
  max_score: number
  /** @example 1 */
  weight?: number | null
  /**
   * @format date-time
   * @example "2026-03-20T23:59:59Z"
   */
  due_date: string
  /**
   * @format date-time
   * @example "2026-03-01T10:30:00Z"
   */
  created_at: string
}

export interface CreateAssignmentRequest {
  /**
   * @minLength 1
   * @maxLength 200
   * @example "Homework 1"
   */
  title: string
  /** @example "Solve exercises 1-10" */
  description?: string | null
  /** @example 101 */
  course_id: number
  /** @example 10 */
  teacher_id: number
  /**
   * @min 0
   * @example 100
   */
  max_score: number
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  weight?: number | null
  /**
   * @format date-time
   * @example "2026-03-20T23:59:59Z"
   */
  due_date: string
}

export interface UpdateAssignmentRequest {
  /**
   * @minLength 1
   * @maxLength 200
   * @example "Homework 1 Updated"
   */
  title?: string
  /** @example "Solve exercises 1-15" */
  description?: string | null
  /**
   * @min 0
   * @example 100
   */
  max_score?: number
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  weight?: number | null
  /**
   * @format date-time
   * @example "2026-03-22T23:59:59Z"
   */
  due_date?: string
}

export interface AssignmentPage {
  /** @example 15 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Assignment[]
}

export interface Submission {
  /** @example 301 */
  id: number
  /** @example 201 */
  assignment_id: number
  /** @example 301 */
  student_id: number
  /** @example "Answers to homework" */
  content?: string
  /** @example "SUBMITTED" */
  status: 'PENDING' | 'SUBMITTED' | 'GRADED'
  /**
   * @format date-time
   * @example "2026-03-12T12:50:00Z"
   */
  submitted_at: string
  /** @example 85.5 */
  grade?: number | null
}

export interface CreateSubmissionRequest {
  /** @example 201 */
  assignment_id: number
  /** @example 301 */
  student_id: number
  /**
   * @minLength 1
   * @example "Answers to homework"
   */
  content: string
}

export interface UpdateSubmissionRequest {
  /** @example "Updated answers" */
  content?: string
  /** @example "GRADED" */
  status?: 'PENDING' | 'SUBMITTED' | 'GRADED'
}

export interface SubmissionPage {
  /** @example 10 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Submission[]
}

export interface Grade {
  /** @example 401 */
  id: number
  /** @example 301 */
  student_id: number
  /** @example 201 */
  assignment_id: number
  /** @example 95 */
  score: number
  /** @example "Excellent work!" */
  comment?: string | null
  /**
   * @format date-time
   * @example "2026-03-12T12:55:00Z"
   */
  created_at: string
}

export interface CreateGradeRequest {
  /** @example 301 */
  student_id: number
  /** @example 201 */
  assignment_id: number
  /**
   * @min 0
   * @max 100
   * @example 95
   */
  score: number
  /** @example "Good job" */
  comment?: string | null
}

export interface UpdateGradeRequest {
  /**
   * @min 0
   * @max 100
   * @example 98
   */
  score: number
  /** @example "Even better!" */
  comment?: string | null
}

export interface GradePage {
  /** @example 50 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Grade[]
}

export interface Attendance {
  /** @example 501 */
  id: number
  /** @example 301 */
  student_id: number
  /** @example 101 */
  course_id: number
  /**
   * @format date
   * @example "2026-03-12"
   */
  date: string
  /** @example "PRESENT" */
  status: 'PRESENT' | 'ABSENT' | 'EXCUSED'
}

export interface CreateAttendanceRequest {
  /** @example 301 */
  student_id: number
  /** @example 101 */
  course_id: number
  /**
   * @format date
   * @example "2026-03-12"
   */
  date: string
  /** @example "PRESENT" */
  status: 'PRESENT' | 'ABSENT' | 'EXCUSED'
}

export interface UpdateAttendanceRequest {
  /** @example "EXCUSED" */
  status?: 'PRESENT' | 'ABSENT' | 'EXCUSED'
}

export interface AttendancePage {
  /** @example 25 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: Attendance[]
}

export interface PrivacyPolicy {
  /** @example 1 */
  id: number
  /** @example 1 */
  group_id: number
  /** @example true */
  show_rating_to_students: boolean
  /** @example "ANONYMIZED" */
  rating_mode: 'FULL' | 'ANONYMIZED'
  /** @example true */
  allow_student_stats: boolean
  /** @example 1 */
  version: number
  /**
   * @format date-time
   * @example "2026-03-12T12:00:00Z"
   */
  updated_at: string
}

export interface CreatePrivacyPolicyRequest {
  /** @example 1 */
  group_id: number
  /** @example true */
  show_rating_to_students: boolean
  /** @example "ANONYMIZED" */
  rating_mode: 'FULL' | 'ANONYMIZED'
  /** @example true */
  allow_student_stats: boolean
}

export interface UpdatePrivacyPolicyRequest {
  /** @example true */
  show_rating_to_students?: boolean
  /** @example "ANONYMIZED" */
  rating_mode?: 'FULL' | 'ANONYMIZED'
  /** @example true */
  allow_student_stats?: boolean
}

export interface ImportSource {
  /** @example 1 */
  id: number
  /** @example 1 */
  stream_id: number
  /** @example 101 */
  course_id: number
  /** @example "grades_spring_2026.xlsx" */
  file_name: string
  /** @example "admin@university.edu" */
  uploaded_by: string
  /** @example "COMPLETED" */
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
  /**
   * @format date-time
   * @example "2026-03-12T10:30:00Z"
   */
  uploaded_at: string
}

export interface CreateImportSourceRequest {
  /** @example 1 */
  stream_id: number
  /** @example 101 */
  course_id: number
  /**
   * @minLength 1
   * @maxLength 255
   * @example "grades_spring_2026.xlsx"
   */
  file_name: string
  /** @example "admin@university.edu" */
  uploaded_by: string
}

export interface UpdateImportSourceRequest {
  /** @example "COMPLETED" */
  status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
}

export interface ImportSourcePage {
  /** @example 5 */
  count: number
  /** @example 0 */
  page: number
  /** @example 20 */
  page_size: number
  results: ImportSource[]
}

export interface GroupAnalytics {
  /** @example 1 */
  group_id: number
  /** @example 82.5 */
  average_score: number
  /** @example 0.95 */
  submission_rate: number
  /** @example 0.88 */
  attendance_rate: number
  /** @example {"A":5,"B":8,"C":4,"D":2,"F":1} */
  distribution: Record<string, number>
}

export interface StudentAnalytics {
  /** @example 301 */
  student_id: number
  /** @example 91.2 */
  average_score: number
  /** @example 3 */
  rank: number
  /** @example 0.95 */
  attendance_rate: number
  /** @example 1 */
  submission_rate: number
}

export interface StudentRating {
  /** @example 301 */
  student_id: number
  /** @example 3 */
  rank: number
  /** @example 91.2 */
  average_score: number
  /**
   * Populated only for curator/admin
   * @example "John Doe"
   */
  full_name?: string | null
  /**
   * Anonymized identifier for students
   * @example "STU-2026-001"
   */
  anonymized_id?: string | null
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8000/api'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        )
        return formData
      }, new FormData())
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

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
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const responseToParse = responseFormat ? response.clone() : response
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Academic Performance API
 * @version 1.0.0
 * @baseUrl http://localhost:8000/api
 *
 * API for student academic performance tracking system
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description OAuth2 password flow for obtaining JWT token with role-based scopes
     *
     * @tags Auth
     * @name TokenCreate
     * @summary Get access token
     * @request POST:/auth/token
     * @secure
     */
    tokenCreate: (
      data: {
        /** @example "password" */
        grant_type: 'password'
        /**
         * @format email
         * @example "curator@university.edu"
         */
        username: string
        /**
         * @format password
         * @example "securePass123"
         */
        password: string
        /** @example "student curator" */
        scope?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
          access_token?: string
          /** @example "bearer" */
          token_type?: string
          /** @example 86400 */
          expires_in?: number
          /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
          refresh_token?: string
          /** @example "student curator" */
          scope?: string
        },
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/auth/token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name RefreshCreate
     * @summary Refresh access token
     * @request POST:/auth/refresh
     * @secure
     */
    refreshCreate: (
      data: {
        /** @example "refresh_token" */
        grant_type: 'refresh_token'
        /** @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." */
        refresh_token: string
      },
      params: RequestParams = {},
    ) =>
      this.request<TokenResponse, ErrorResponse>({
        path: `/auth/refresh`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),
  }
  users = {
    /**
     * @description Admin only access
     *
     * @tags Users
     * @name UsersList
     * @summary Get users list
     * @request GET:/users
     * @secure
     */
    usersList: (
      query?: {
        /**
         * Page number (starting from 0)
         * @min 0
         * @default 0
         * @example 0
         */
        page?: number
        /**
         * Page size
         * @min 1
         * @max 100
         * @default 20
         * @example 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        UserPage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/users`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Users
     * @name UsersCreate
     * @summary Create new user
     * @request POST:/users
     * @secure
     */
    usersCreate: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.request<
        User,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UsersDetail
     * @summary Get user by ID
     * @request GET:/users/{user_id}
     * @secure
     */
    usersDetail: (userId: number, params: RequestParams = {}) =>
      this.request<User, ErrorResponse>({
        path: `/users/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Users
     * @name UsersUpdate
     * @summary Update user
     * @request PUT:/users/{user_id}
     * @secure
     */
    usersUpdate: (userId: number, data: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<
        User,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/users/${userId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Users
     * @name UsersDelete
     * @summary Delete user
     * @request DELETE:/users/{user_id}
     * @secure
     */
    usersDelete: (userId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/users/${userId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  }
  groups = {
    /**
     * @description Accessible to admins and curators
     *
     * @tags Groups
     * @name GroupsList
     * @summary Get groups list
     * @request GET:/groups
     * @secure
     */
    groupsList: (
      query?: {
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GroupPage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Groups
     * @name GroupsCreate
     * @summary Create new group
     * @request POST:/groups
     * @secure
     */
    groupsCreate: (data: CreateGroupRequest, params: RequestParams = {}) =>
      this.request<
        Group,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name GroupsDetail
     * @summary Get group by ID
     * @request GET:/groups/{group_id}
     * @secure
     */
    groupsDetail: (groupId: number, params: RequestParams = {}) =>
      this.request<Group, ErrorResponse>({
        path: `/groups/${groupId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Groups
     * @name GroupsUpdate
     * @summary Update group
     * @request PUT:/groups/{group_id}
     * @secure
     */
    groupsUpdate: (groupId: number, data: UpdateGroupRequest, params: RequestParams = {}) =>
      this.request<
        Group,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Groups
     * @name GroupsDelete
     * @summary Delete group
     * @request DELETE:/groups/{group_id}
     * @secure
     */
    groupsDelete: (groupId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/groups/${groupId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsList
     * @summary Get group streams list
     * @request GET:/groups/{group_id}/streams
     * @secure
     */
    streamsList: (
      groupId: number,
      query?: {
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        StreamPage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/streams`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Streams
     * @name StreamsCreate
     * @summary Create new stream
     * @request POST:/groups/{group_id}/streams
     * @secure
     */
    streamsCreate: (groupId: number, data: CreateStreamRequest, params: RequestParams = {}) =>
      this.request<
        Stream,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/streams`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags PrivacyPolicies
     * @name PrivacyPolicyList
     * @summary Get group privacy policy
     * @request GET:/groups/{group_id}/privacy-policy
     * @secure
     */
    privacyPolicyList: (groupId: number, params: RequestParams = {}) =>
      this.request<PrivacyPolicy, ErrorResponse>({
        path: `/groups/${groupId}/privacy-policy`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags PrivacyPolicies
     * @name PrivacyPolicyCreate
     * @summary Create privacy policy
     * @request POST:/groups/{group_id}/privacy-policy
     * @secure
     */
    privacyPolicyCreate: (groupId: number, data: CreatePrivacyPolicyRequest, params: RequestParams = {}) =>
      this.request<
        PrivacyPolicy,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/privacy-policy`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags PrivacyPolicies
     * @name PrivacyPolicyUpdate
     * @summary Update privacy policy
     * @request PUT:/groups/{group_id}/privacy-policy
     * @secure
     */
    privacyPolicyUpdate: (groupId: number, data: UpdatePrivacyPolicyRequest, params: RequestParams = {}) =>
      this.request<
        PrivacyPolicy,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/privacy-policy`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags PrivacyPolicies
     * @name PrivacyPolicyDelete
     * @summary Delete privacy policy
     * @request DELETE:/groups/{group_id}/privacy-policy
     * @secure
     */
    privacyPolicyDelete: (groupId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/groups/${groupId}/privacy-policy`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Returns aggregated group metrics: - Average score - Grade distribution - Attendance percentage - Dynamics over period
     *
     * @tags Analytics
     * @name AnalyticsList
     * @summary Get group analytics
     * @request GET:/groups/{group_id}/analytics
     * @secure
     */
    analyticsList: (
      groupId: number,
      query?: {
        /**
         * Filter by semester
         * @example "FALL"
         */
        semester?: 'SPRING' | 'FALL'
        /**
         * Filter by year
         * @example 2026
         */
        year?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GroupAnalytics,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/analytics`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description For curator/admin - full rating with names For students/class representatives - anonymized rating (determined by privacy policy)
     *
     * @tags Analytics
     * @name RatingsList
     * @summary Get group student ratings
     * @request GET:/groups/{group_id}/ratings
     * @secure
     */
    ratingsList: (
      groupId: number,
      query?: {
        /** @example "FALL" */
        semester?: 'SPRING' | 'FALL'
        /** @example 2026 */
        year?: number
        /**
         * Filter by specific course
         * @example 101
         */
        course_id?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /** @example 1 */
          group_id?: number
          ratings?: StudentRating[]
        },
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/groups/${groupId}/ratings`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  streams = {
    /**
     * No description
     *
     * @tags Streams
     * @name StreamsDetail
     * @summary Get stream by ID
     * @request GET:/streams/{stream_id}
     * @secure
     */
    streamsDetail: (streamId: number, params: RequestParams = {}) =>
      this.request<Stream, ErrorResponse>({
        path: `/streams/${streamId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Streams
     * @name StreamsUpdate
     * @summary Update stream
     * @request PUT:/streams/{stream_id}
     * @secure
     */
    streamsUpdate: (streamId: number, data: UpdateStreamRequest, params: RequestParams = {}) =>
      this.request<
        Stream,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/streams/${streamId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Streams
     * @name StreamsDelete
     * @summary Delete stream
     * @request DELETE:/streams/{stream_id}
     * @secure
     */
    streamsDelete: (streamId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/streams/${streamId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Courses
     * @name CoursesList
     * @summary Get stream courses list
     * @request GET:/streams/{stream_id}/courses
     * @secure
     */
    coursesList: (
      streamId: number,
      query?: {
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CoursePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/streams/${streamId}/courses`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Courses
     * @name CoursesCreate
     * @summary Create new course
     * @request POST:/streams/{stream_id}/courses
     * @secure
     */
    coursesCreate: (streamId: number, data: CreateCourseRequest, params: RequestParams = {}) =>
      this.request<
        Course,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/streams/${streamId}/courses`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags ImportSources
     * @name ImportSourcesList
     * @summary Get stream import sources list
     * @request GET:/streams/{stream_id}/import-sources
     * @secure
     */
    importSourcesList: (
      streamId: number,
      query?: {
        /**
         * Filter by status
         * @example "COMPLETED"
         */
        status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED'
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        ImportSourcePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/streams/${streamId}/import-sources`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags ImportSources
     * @name ImportSourcesCreate
     * @summary Create import source
     * @request POST:/streams/{stream_id}/import-sources
     * @secure
     */
    importSourcesCreate: (streamId: number, data: CreateImportSourceRequest, params: RequestParams = {}) =>
      this.request<
        ImportSource,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/streams/${streamId}/import-sources`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  courses = {
    /**
     * No description
     *
     * @tags Courses
     * @name CoursesDetail
     * @summary Get course by ID
     * @request GET:/courses/{course_id}
     * @secure
     */
    coursesDetail: (courseId: number, params: RequestParams = {}) =>
      this.request<Course, ErrorResponse>({
        path: `/courses/${courseId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Courses
     * @name CoursesUpdate
     * @summary Update course
     * @request PUT:/courses/{course_id}
     * @secure
     */
    coursesUpdate: (courseId: number, data: UpdateCourseRequest, params: RequestParams = {}) =>
      this.request<
        Course,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/courses/${courseId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags Courses
     * @name CoursesDelete
     * @summary Delete course
     * @request DELETE:/courses/{course_id}
     * @secure
     */
    coursesDelete: (courseId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/courses/${courseId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignments
     * @name AssignmentsList
     * @summary Get course assignments list
     * @request GET:/courses/{course_id}/assignments
     * @secure
     */
    assignmentsList: (
      courseId: number,
      query?: {
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AssignmentPage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/courses/${courseId}/assignments`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Assignments
     * @name AssignmentsCreate
     * @summary Create new assignment
     * @request POST:/courses/{course_id}/assignments
     * @secure
     */
    assignmentsCreate: (courseId: number, data: CreateAssignmentRequest, params: RequestParams = {}) =>
      this.request<
        Assignment,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/courses/${courseId}/assignments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description For teachers and curators
     *
     * @tags Attendance
     * @name AttendanceList
     * @summary Get course attendance
     * @request GET:/courses/{course_id}/attendance
     * @secure
     */
    attendanceList: (
      courseId: number,
      query?: {
        /**
         * Filter by date
         * @format date
         * @example "2026-03-12"
         */
        date?: string
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AttendancePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/courses/${courseId}/attendance`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  assignments = {
    /**
     * No description
     *
     * @tags Assignments
     * @name AssignmentsDetail
     * @summary Get assignment by ID
     * @request GET:/assignments/{assignment_id}
     * @secure
     */
    assignmentsDetail: (assignmentId: number, params: RequestParams = {}) =>
      this.request<Assignment, ErrorResponse>({
        path: `/assignments/${assignmentId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Assignments
     * @name AssignmentsUpdate
     * @summary Update assignment
     * @request PUT:/assignments/{assignment_id}
     * @secure
     */
    assignmentsUpdate: (assignmentId: number, data: UpdateAssignmentRequest, params: RequestParams = {}) =>
      this.request<
        Assignment,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/assignments/${assignmentId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Assignments
     * @name AssignmentsDelete
     * @summary Delete assignment
     * @request DELETE:/assignments/{assignment_id}
     * @secure
     */
    assignmentsDelete: (assignmentId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/assignments/${assignmentId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Submissions
     * @name SubmissionsList
     * @summary Get assignment submissions list
     * @request GET:/assignments/{assignment_id}/submissions
     * @secure
     */
    submissionsList: (
      assignmentId: number,
      query?: {
        /**
         * Filter by student (for curator/admin)
         * @example 301
         */
        student_id?: number
        /**
         * Filter by status
         * @example "SUBMITTED"
         */
        status?: 'PENDING' | 'SUBMITTED' | 'GRADED'
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SubmissionPage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/assignments/${assignmentId}/submissions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Student can only create their own submission
     *
     * @tags Submissions
     * @name SubmissionsCreate
     * @summary Create submission
     * @request POST:/assignments/{assignment_id}/submissions
     * @secure
     */
    submissionsCreate: (assignmentId: number, data: CreateSubmissionRequest, params: RequestParams = {}) =>
      this.request<
        Submission,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/assignments/${assignmentId}/submissions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Grades
     * @name GradesList
     * @summary Get assignment grades list
     * @request GET:/assignments/{assignment_id}/grades
     * @secure
     */
    gradesList: (
      assignmentId: number,
      query?: {
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GradePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/assignments/${assignmentId}/grades`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Grades
     * @name GradesCreate
     * @summary Assign grade
     * @request POST:/assignments/{assignment_id}/grades
     * @secure
     */
    gradesCreate: (assignmentId: number, data: CreateGradeRequest, params: RequestParams = {}) =>
      this.request<
        Grade,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/assignments/${assignmentId}/grades`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  submissions = {
    /**
     * No description
     *
     * @tags Submissions
     * @name SubmissionsDetail
     * @summary Get submission by ID
     * @request GET:/submissions/{submission_id}
     * @secure
     */
    submissionsDetail: (submissionId: number, params: RequestParams = {}) =>
      this.request<Submission, ErrorResponse>({
        path: `/submissions/${submissionId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Student can only update their own submission
     *
     * @tags Submissions
     * @name SubmissionsUpdate
     * @summary Update submission
     * @request PUT:/submissions/{submission_id}
     * @secure
     */
    submissionsUpdate: (submissionId: number, data: UpdateSubmissionRequest, params: RequestParams = {}) =>
      this.request<
        Submission,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/submissions/${submissionId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  grades = {
    /**
     * @description Accessible to admins and curators
     *
     * @tags Grades
     * @name GradesDetail
     * @summary Get grade by ID
     * @request GET:/grades/{grade_id}
     * @secure
     */
    gradesDetail: (gradeId: number, params: RequestParams = {}) =>
      this.request<Grade, ErrorResponse>({
        path: `/grades/${gradeId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Grades
     * @name GradesUpdate
     * @summary Update grade
     * @request PUT:/grades/{grade_id}
     * @secure
     */
    gradesUpdate: (gradeId: number, data: UpdateGradeRequest, params: RequestParams = {}) =>
      this.request<
        Grade,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/grades/${gradeId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  students = {
    /**
     * @description Student can only see their own grades
     *
     * @tags Grades
     * @name GradesList
     * @summary Get student grades
     * @request GET:/students/{student_id}/grades
     * @secure
     */
    gradesList: (
      studentId: number,
      query?: {
        /**
         * Filter by course (optional)
         * @example 101
         */
        course_id?: number
        /**
         * Filter by semester (optional)
         * @example "FALL"
         */
        semester?: 'SPRING' | 'FALL'
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GradePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/students/${studentId}/grades`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Student can only see their own attendance
     *
     * @tags Attendance
     * @name AttendanceList
     * @summary Get student attendance
     * @request GET:/students/{student_id}/attendance
     * @secure
     */
    attendanceList: (
      studentId: number,
      query?: {
        /**
         * Filter by course (optional)
         * @example 101
         */
        course_id?: number
        /**
         * Start date
         * @format date
         * @example "2026-03-01"
         */
        date_from?: string
        /**
         * End date
         * @format date
         * @example "2026-03-31"
         */
        date_to?: string
        /**
         * @min 0
         * @default 0
         */
        page?: number
        /**
         * @min 1
         * @max 100
         * @default 20
         */
        page_size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        AttendancePage,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/students/${studentId}/attendance`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Attendance
     * @name AttendanceCreate
     * @summary Add attendance record
     * @request POST:/students/{student_id}/attendance
     * @secure
     */
    attendanceCreate: (studentId: number, data: CreateAttendanceRequest, params: RequestParams = {}) =>
      this.request<
        Attendance,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/students/${studentId}/attendance`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Student can only see their own analytics: - Average score - Rating position - Attendance
     *
     * @tags Analytics
     * @name AnalyticsList
     * @summary Get student analytics
     * @request GET:/students/{student_id}/analytics
     * @secure
     */
    analyticsList: (
      studentId: number,
      query?: {
        /** @example "FALL" */
        semester?: 'SPRING' | 'FALL'
        /** @example 2026 */
        year?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<
        StudentAnalytics,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/students/${studentId}/analytics`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  attendance = {
    /**
     * No description
     *
     * @tags Attendance
     * @name AttendanceDetail
     * @summary Get attendance record by ID
     * @request GET:/attendance/{attendance_id}
     * @secure
     */
    attendanceDetail: (attendanceId: number, params: RequestParams = {}) =>
      this.request<Attendance, ErrorResponse>({
        path: `/attendance/${attendanceId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Attendance
     * @name AttendanceUpdate
     * @summary Update attendance record
     * @request PUT:/attendance/{attendance_id}
     * @secure
     */
    attendanceUpdate: (attendanceId: number, data: UpdateAttendanceRequest, params: RequestParams = {}) =>
      this.request<
        Attendance,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/attendance/${attendanceId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Accessible to admins and curators
     *
     * @tags Attendance
     * @name AttendanceDelete
     * @summary Delete attendance record
     * @request DELETE:/attendance/{attendance_id}
     * @secure
     */
    attendanceDelete: (attendanceId: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/attendance/${attendanceId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  }
  importSources = {
    /**
     * @description Accessible to admins and curators
     *
     * @tags ImportSources
     * @name ImportSourcesDetail
     * @summary Get import source by ID
     * @request GET:/import-sources/{import_id}
     * @secure
     */
    importSourcesDetail: (importId: number, params: RequestParams = {}) =>
      this.request<ImportSource, ErrorResponse>({
        path: `/import-sources/${importId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Admin only access
     *
     * @tags ImportSources
     * @name ImportSourcesUpdate
     * @summary Update import status
     * @request PUT:/import-sources/{import_id}
     * @secure
     */
    importSourcesUpdate: (importId: number, data: UpdateImportSourceRequest, params: RequestParams = {}) =>
      this.request<
        ImportSource,
        | ErrorResponse
        | {
            /**
             * @format date-time
             * @example "2026-03-12T12:00:00Z"
             */
            timestamp: string
            /** @example 422 */
            status: number
            errors: {
              /** @example "page" */
              field?: string
              /** @example "must be greater than or equal to 0" */
              message?: string
              /** @example -1 */
              rejected_value?: any
            }[]
            /** @example "/users" */
            path: string
          }
      >({
        path: `/import-sources/${importId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
