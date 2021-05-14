using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Core.Entity;
using WebApplication1.ShareKernel.DTO;

namespace WebApplication1.ShareKernel
{
    public class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Product, ProductDTO>();
            CreateMap<ProductDTO, Product>();
        }

    }
}
