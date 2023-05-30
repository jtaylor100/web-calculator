using CalculatorTest;

namespace CalculatorTest.Tests;

public class SimpleCalculatorTest
{
    private SimpleCalculator calculator;

    public SimpleCalculatorTest()
    {
        calculator = new SimpleCalculator(); 
    }

    [Fact]
    public void ItAddsTypicalNumbers()
    {
        Assert.Equal(4, calculator.Add(2, 2));
    }

    [Fact]
    public void ItAddsLargeNumbers()
    {
        Assert.Equal(21_235_532, calculator.Add(1_000_000, 20_235_532));
    }

    [Fact]
    public void ItAddsNegativeNumbers()
    {
        Assert.Equal(-4, calculator.Add(-2, -2));
    }

    [Fact]
    public void ItSubtractsTypicalNumbers()
    {
        Assert.Equal(0, calculator.Subtract(2, 2));
    }

    [Fact]
    public void ItSubtractsLargeNumbers()
    {
        Assert.Equal(514, calculator.Subtract(2_014, 1_500));
    }

    [Fact]
    public void ItReturnsNegativeNumbersWhileSubtractingWhenAmountLargerThanStart()
    {
        Assert.Equal(-1_499, calculator.Subtract(1, 1_500));
    }

    [Fact]
    public void ItAddsNumbersWhileSubtractingWhenAmountIsNegative()
    {
        Assert.Equal(3000, calculator.Subtract(1_500, -1_500));
    }
}