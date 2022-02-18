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
            // umbraco end-points
            {"shopContent", "/shop/GetShopContent"},
            {"shopContentById", "/shop/GetShopItemDetails"},
            {"homeContent", "/home/GetHomeContent"},
            {"crewContent", "/crew/GetCrewContent"},
            {"crewContentById", "/crew/GetCrewMemberDetails"},
            {"quizContent", "/quiz/GetQuizContent"},
            {"quizContentById", "/quiz/GetQuestions"},
            {"sharedMetaContent", "/shared/GetMetaData"},
            {"sharedHeaderContent", "/shared/GetHeaderContent"},
            {"trackerContent", "/tracker/GetTrackerContent"},
            {"inventoryContent", "/Inventory/GetResources"},  
            // resource end-points 
            {"resourceContent", "/Resource/GetResources"},
        };

        public PathHelper() { }
        public NameValueCollection Paths => _paths;
    }
}