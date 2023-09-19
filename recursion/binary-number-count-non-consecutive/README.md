## need to find the count of binary numbers which doesn't have consecutive 1's.

    n = 1 --> 2 (0, 1)
    n = 2 --> 3 (00, 01, 10)
    n = 3 --> 5 (000, 010, 100, 101, 001)
    n = 4 --> 8 (0000, 0010, 0100, 1000, 1001, 0101, 0001, 1010)

it seems like fibonacci coz;

    1 -> 2
    2 -> 3
    3 -> 3 + 2 = 5
    4 -> 5 + 3

    f(n) = f(n - 1) + f(n - 2)
    base case:
    if(n == 0) return 2;
    if(n == 1) return 3;
