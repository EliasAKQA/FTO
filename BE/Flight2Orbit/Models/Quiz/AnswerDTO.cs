namespace Flight2Orbit.Models.Quiz
{
    public class AnswerDTO
    {
        public int Id { get; set; }
        public string Answer { get; set; }
        public bool IsCorrect { get; set; }
        public AnswerDTO(int id, string answer, bool isCorrect)
        {
            Id = id;
            Answer = answer;
            IsCorrect = isCorrect;
        }
    }
}