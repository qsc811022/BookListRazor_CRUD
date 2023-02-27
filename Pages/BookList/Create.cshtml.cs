using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using BookListRazor_ted.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BookListRazor_ted.Pages.BookList
{
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext _db;

        public CreateModel(ApplicationDbContext db)
        {
            _db=db;
        }

        [BindProperty]

        public Book Book { get;set;}

        public void OnGet()
        {


        }
        public async Task<IActionResult> onPost()
        {
            if (ModelState.IsValid)
            {
               await _db.Book.AddAsync(Book);
               await _db.SaveChangesAsync();
               return RedirectToPage("Index");

            }
            else
            {
                return Page();
            }

        }

    }
}
