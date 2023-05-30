using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CalculatorTest;

namespace WebCalculator.WebAPI.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class CalculatorController : ControllerBase
{
    private readonly SimpleCalculator calculator;
    public CalculatorController(SimpleCalculator calculator)
    {
        this.calculator = calculator;
    }

    [HttpGet]
    public int Add(int start, int amount)
    {
        return calculator.Add(start, amount);
    }

    [HttpGet]
    public int Subtract(int start, int amount)
    {
        return calculator.Subtract(start, amount);
    }
}