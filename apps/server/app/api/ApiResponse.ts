/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express'
export class ApiResponse {
  /**
   * Sends a JSON response with a 200 OK status.
   *
   * @param {Response} res - The response object to send the status and data with.
   * @param {any} data - The data to send in the JSON response.
   * @return {Response} - The response object with the status and JSON data.
   */
  static ok(res: Response, data: any): Response {
    return res.status(200).json(data)
  }

  /**
   * Sends a 201 Created status response with the provided data as JSON.
   *
   * @param {Response} res - The response object.
   * @param {any} data - The data to be sent in the response body.
   * @return {Response} The response object with the status and JSON data.
   */
  static created(res: Response, data: any): Response {
    return res.status(201).json(data)
  }

  /**
   * Sends a response indicating that a resource has been successfully deleted.
   *
   * @param {Response} res - The response object.
   * @return {Response} The response object with status 204 and a success message.
   */
  static deleted(res: Response): Response {
    return res.status(204).json({
      message: `Deleted successfully`,
    })
  }
}
