using System;
using System.Net;

namespace Flight2Orbit.Exceptions
{
    public class InternalServerErrorException : Exception
    {
        public HttpStatusCode StatusCode { get; set; }

        public InternalServerErrorException() { StatusCode = HttpStatusCode.InternalServerError; }

        public InternalServerErrorException(string message) : base(message) { StatusCode = HttpStatusCode.InternalServerError; }

        public InternalServerErrorException(string message, Exception innerException) : base(message, innerException) { StatusCode = HttpStatusCode.InternalServerError; }
    }
}