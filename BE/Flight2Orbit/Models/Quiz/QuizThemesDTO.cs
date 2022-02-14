using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models.Quiz
{
    public class QuizThemesDTO
    {
        public int Id { get; set; }
        public string Theme { get; set; }
        public string ImageUrl { get; set; }
        //public IEnumerable<QuestionDTO> Questions { get; set; }
        public QuizThemesDTO(int id, string theme, string imageUrl)
        {
            Id = id;
            Theme = theme;
            ImageUrl = imageUrl;
        }
    }
}