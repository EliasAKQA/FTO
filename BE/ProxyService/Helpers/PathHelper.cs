using System.Collections.Specialized;

namespace ProxyService.Services
{
    /// <summary>
    /// Capsulate all end-points of internal services. 
    /// </summary>
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
            {"shopItemOverview", "/shop/getshopitemoverview"},
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
            {"postResourceContent", "/Resource/Post"},  
            // Cart end-points 
            {"cartContent", "/Cart/GetCartItems"},
            {"postCartContent", "/Cart/PostCartItems"},
        };

        public PathHelper() { }
        public NameValueCollection Paths => _paths;
    }
}