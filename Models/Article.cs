using System;
using System.Collections.Generic;

namespace AussieUpdate.Models
{
    public partial class Article
    {
        public int ArticleId { get; set; }
        public string LangCode { get; set; }
        public string MonthNr { get; set; }
        public string PicUrl { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Paragraph { get; set; }
        public string Reserve { get; set; }
    }
}
