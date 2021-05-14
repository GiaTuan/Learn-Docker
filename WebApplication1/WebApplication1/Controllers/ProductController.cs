using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Entity;
using WebApplication1.Core.Interfaces;
using WebApplication1.ShareKernel.DTO;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly ILogger<ProductController> _logger;
        private readonly IProductService _producstService;
        private readonly IMapper _mapper;

        public ProductController(IProductService producstService,ILogger<ProductController> logger, IMapper mapper)
        {
            _producstService = producstService;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            List<ProductDTO> products = await _producstService.GetAll();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            ProductDTO product = await _producstService.GetById(id);
            return Ok(product);
        }

        [HttpPost("addproduct")]
        public async Task<IActionResult> AddProduct(ProductDTO product)
        {
            int idProduct = await _producstService.Add(product);
            if (idProduct != -1)
                return Ok();
            else
                return StatusCode(500);
        }
    }
}
