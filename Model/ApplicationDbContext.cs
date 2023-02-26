using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookListRazor_ted.Model
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {

        }

        public DbSet<Book> Book { get;set;}

        //一個 DbSet 對應著資料庫中的一個表（table），它允許我們對這個表中的資料進行 CRUD（創建、讀取、更新、刪除）操作。
    }
}
