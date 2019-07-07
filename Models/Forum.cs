using System;
using System.Collections.Generic;

namespace AussieUpdate.Models
{
    public partial class Forum
    {
        public int ForumId { get; set; }
        public string Person { get; set; }
        public DateTime? PostDate { get; set; }
        public string Post { get; set; }
        public string Reserve { get; set; }
    }
}
