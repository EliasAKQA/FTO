using System.Collections;
using System.Collections.Generic;

namespace Flight2Orbit.Models.Quiz
{
    public class QuestionDTO
    {
        public string Question { get; set; }
        public IEnumerable<AnswerDTO> Answers { get; set; }

        public QuestionDTO(string question, IEnumerable<AnswerDTO> answers)
        {
            Question = question;
            Answers = answers;
        }
    }
}