using System.Collections.Generic;

namespace Flight2Orbit.Models.Shared
{
    public class MenuDTO : MenuContainer
    {
        public List<MenuContainer> Content { get; set; }
        public MenuDTO(List<MenuContainer> content)
        {
            Content = content;
        }
    }
}