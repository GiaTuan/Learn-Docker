using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Entity;
using WebApplication1.Core.Interfaces;
using WebApplication1.Infrastructure;
using WebApplication1.NewFolder;
using WebApplication1.ShareKernel.DTO;

namespace WebApplication1.Core.Services
{
    public class ProductService : IProductService
    {
        private readonly IRepository<Product> _repository;
        private readonly IMapper _mapper;

        public ProductService(IRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<ProductDTO>> GetAll()
        {
            var products = await _repository.GetAll();
            var productsDTO = products.ConvertAll(item => _mapper.Map<ProductDTO>(item));
            return productsDTO;
        }

        public async Task<int> Add(ProductDTO productDTO)
        {
            var product = _mapper.Map<Product>(productDTO);
            int id = await _repository.Add(product);
            return id;
        }

        public async Task<ProductDTO> GetById(int id)
        {
            var product = await _repository.GetById(id);
            var productDTO = _mapper.Map<ProductDTO>(product);
            return productDTO;
        }
    }
}
