using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models.Quiz
{
    public class QuizDTO
    {
        public string Headline { get; set; }
        public string Text { get; set; }
        public IEnumerable<QuizThemesDTO> Themes { get; set; }
        public QuizDTO(string headline, string text, IEnumerable<QuizThemesDTO> themes)
        {
            Headline = headline;
            Text = text;
            Themes = themes;
        }
    }
}