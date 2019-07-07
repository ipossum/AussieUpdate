using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AussieUpdate.Models
{
    public partial class AussieUpdateContext : DbContext
    {
        public AussieUpdateContext()
        {
        }

        public AussieUpdateContext(DbContextOptions<AussieUpdateContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Article> Article { get; set; }
        public virtual DbSet<Forum> Forum { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-LS4UATB;Database=AussieUpdate;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>(entity =>
            {
                entity.Property(e => e.ArticleId)
                    .HasColumnName("ArticleID")
                    .ValueGeneratedNever();

                entity.Property(e => e.LangCode)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.MonthNr)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.Paragraph)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.PicUrl)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Reserve)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Summary)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Forum>(entity =>
            {
                entity.Property(e => e.ForumId)
                    .HasColumnName("ForumID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Person)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Post)
                    .HasMaxLength(1000)
                    .IsUnicode(false);

                entity.Property(e => e.PostDate).HasColumnType("datetime");

                entity.Property(e => e.Reserve)
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });
        }
    }
}
