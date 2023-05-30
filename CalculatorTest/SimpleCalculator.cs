using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculatorTest
{
    public class SimpleCalculator : ISimpleCalculator
    {
        public int Add(int start, int amount)
        {
            return start + amount;
        }

        public int Subtract(int start, int amount)
        {
            return start - amount;
        }
    }
}