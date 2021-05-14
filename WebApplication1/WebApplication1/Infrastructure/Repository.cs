using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Interfaces;
using WebApplication1.NewFolder;

namespace WebApplication1.Infrastructure
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly MyContext _myContext;
        
        public Repository(MyContext myContext)
        {
            _myContext = myContext;
        }


        public async Task<int> Add(T item)
        {
            try
            {
                await _myContext.Set<T>().AddAsync(item);
                await _myContext.SaveChangesAsync();
                return item.Id;
            }
            catch(Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
            return -1;
        }

        public async Task<List<T>> GetAll()
        {
            List<T> result = await _myContext.Set<T>().ToListAsync();
            return result;
        }

        public async Task<T> GetById(int id)
        {
            var result = await _myContext.Set<T>().Where(item => item.Id == id).FirstOrDefaultAsync();
            return result;
        }
    }
}
