using System;

namespace CalculatorTest
{
    public interface ISimpleCalculator
    {
        int Add(int start, int amount);
        int Subtract(int start, int amount);
    }
}
