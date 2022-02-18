using System.Collections.Specialized;

namespace ProxyService.Services
{
    public class PathHelper
    {
        private NameValueCollection _paths
        {
            get;
        } = new NameValueCollection
        {
            {"shopContent", "/shop/GetShopContent"},
            {"shopContentById", "/shop/GetShopItemDetails"},
            {"homeContent", "/home/GetHomeContent"},
            {"crewContent", "/crew/GetCrewContent"},
            {"quizContent", "/quiz/GetQuizContent"},
            {"quizContentById", "/quiz/GetQuestions"},
            {"sharedMetaContent", "/shared/GetMetaData"},
            {"sharedHeaderContent", "/shared/GetHeaderContent"},
        };

        public PathHelper() { }
        public NameValueCollection Paths => _paths;
    }
}