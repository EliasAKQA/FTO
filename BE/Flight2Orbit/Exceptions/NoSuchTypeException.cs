using System;
using System.Net;

namespace Flight2Orbit.Exceptions
{
    public class NoSuchTypeException : Exception
    {
        public HttpStatusCode StatusCode { get; set; }

        public NoSuchTypeException() { StatusCode = HttpStatusCode.NotFound; }

        public NoSuchTypeException(string message) : base(message) { StatusCode = HttpStatusCode.NotFound; }

        public NoSuchTypeException(string message, Exception innerException) : base(message, innerException) { StatusCode = HttpStatusCode.NotFound; }
    }
}