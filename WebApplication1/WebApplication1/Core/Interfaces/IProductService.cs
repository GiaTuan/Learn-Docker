using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Entity;
using WebApplication1.ShareKernel.DTO;

namespace WebApplication1.Core.Interfaces
{
    public interface IProductService
    {
        Task<List<ProductDTO>> GetAll();
        Task<ProductDTO> GetById(int id);
        Task<int> Add(ProductDTO productDTO);
    }
}
