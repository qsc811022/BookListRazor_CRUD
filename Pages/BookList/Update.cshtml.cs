using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookListRazor_ted.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace BookListRazor_ted.Pages.BookList
{
    public class UpdateModel : PageModel
    {
        private readonly ApplicationDbContext _db;

        public UpdateModel(ApplicationDbContext db)
        {
            _db = db;
        }

        [BindProperty]
        public Book Book { get; set; }



        public async Task<IActionResult> OnGet(int? id)
        {
            Book = new Book();
            if (id==null)
            {
                //Create
                return Page();
            }

            //update
            Book= await _db.Book.FirstOrDefaultAsync(u=>u.Id==id);
            if (Book==null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPost()
        {
            if (ModelState.IsValid)
            {
                if (Book.Id==0)
                {
                    _db.Book.Add(Book);
                }
                else
                {
                    _db.Book.Update(Book);
                }
                await _db.SaveChangesAsync();

                return RedirectToPage("Index");
            }
            return RedirectToPage();
        }
    }
}
