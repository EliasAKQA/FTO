namespace Flight2Orbit.Models.Quiz
{
    public class AnswerDTO
    {
        public string Answer { get; set; }
        public bool IsCorrect { get; set; }
        public AnswerDTO(string answer, bool isCorrect)
        {
            Answer = answer;
            IsCorrect = isCorrect;
        }
    }
}