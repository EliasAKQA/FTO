using System;
using System.Net;

namespace Flight2Orbit.Exceptions
{
    class NotFoundException : Exception
    {
        public HttpStatusCode StatusCode { get; set; }

        public NotFoundException() { StatusCode = HttpStatusCode.NotFound; }

        public NotFoundException(string message) : base(message) { StatusCode = HttpStatusCode.NotFound; }

        public NotFoundException(string message, Exception innerException) : base(message, innerException) { StatusCode = HttpStatusCode.NotFound; }
    }
}