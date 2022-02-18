using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models.Quiz
{
    public class QuestionDTO
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string ImageUrl { get; set; }
        public IEnumerable<AnswerDTO> Answers { get; set; }

        public QuestionDTO(int id, string question, string imageUrl, IEnumerable<AnswerDTO> answers)
        {
            Id = id;
            Question = question;
            ImageUrl = imageUrl;
            Answers = answers;
        }
        public QuestionDTO(int id, string question, IEnumerable<AnswerDTO> answers)
        {
            Id = id;
            Question = question;
            Answers = answers;
        }
    }
}