using Microsoft.AspNetCore.Mvc;
using ProductApi.Models;

namespace ProductApi.Controllers;

[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        if (id != 1)
            return NotFound(new { message = "Product not found" });

        var product = new Product
        {
            Id = 1,
            Name = "Sample Product",
            Price = 29.99m
        };

        return Ok(product);
    }
}