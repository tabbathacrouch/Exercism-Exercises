import { each, filter, find, map, reduce } from "./collections";

describe("array functions", () => {
  describe("each", () => {
    test("callback is invoked on each element", () => {
      const mockedCallback = jest.fn();
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      each(nums, mockedCallback);
      expect(mockedCallback.mock.calls.length).toBe(nums.length);
      expect(mockedCallback.mock.calls[0][0]).toBe(1); // first item
      expect(mockedCallback.mock.calls[nums.length - 1][0]).toBe(10); // last item
    });

    xtest("callback is invoked with each elements index", () => {
      const mockedCallback = jest.fn();
      const junk = ["a", null, NaN, 123, "sup"];
      each(junk, mockedCallback);
      for (let i = 0; i < junk.length; i++) {
        expect(mockedCallback.mock.calls[i][1]).toBe(i);
      }
    });
  });

  xdescribe("filter", () => {
    test("callback is invoked with each elements index", () => {
      const mockedCallback = jest.fn();
      const junk = ["a", null, NaN, 123, "sup"];
      filter(junk, mockedCallback);
      for (let i = 0; i < junk.length; i++) {
        expect(mockedCallback.mock.calls[i][1]).toBe(i);
      }
    });

    test("filters correctly", () => {
      expect(filter([0, 1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual([0, 2, 4]);
      expect(filter([100, 500, 1200], (n) => n > 1000)).toEqual([1200]);
      expect(
        filter(
          [{ name: "Bill" }, { name: "Steve" }],
          ({ name }) => name === "Bill"
        )
      ).toEqual([{ name: "Bill" }]);
    });
  });

  xdescribe("map", () => {
    test("callback is invoked with each elements index", () => {
      const mockedCallback = jest.fn();
      const junk = ["a", null, NaN, 123, "sup"];
      map(junk, mockedCallback);
      for (let i = 0; i < junk.length; i++) {
        expect(mockedCallback.mock.calls[i][1]).toBe(i);
      }
    });

    test("transforms array correctly", () => {
      expect(map([1, 2, 3, 4], (n) => n * 5)).toEqual([5, 10, 15, 20]);
      expect(map(["Suh", "Dude"], (s) => s.toLowerCase())).toEqual([
        "suh",
        "dude",
      ]);
      expect(map([0, 1], (num) => ({ value: num }))).toEqual([
        { value: 0 },
        { value: 1 },
      ]);
    });
  });

  xdescribe("reduce", () => {
    const nums = [1, 2, 3];
    const numsLetters = ["a", 1, "b", 2, "c", 3];
    const names = ["bill", "jim", "steve"];

    test("callback is invoked with correct arguments", () => {
      const mockedCallback = jest.fn((curr, prev) => prev);
      const initialValue = "blah";
      reduce([123, "abc"], mockedCallback, initialValue);

      // first
      expect(mockedCallback.mock.calls[0][0]).toBe(initialValue);
      expect(mockedCallback.mock.calls[0][1]).toBe(123);
      expect(mockedCallback.mock.calls[0][2]).toBe(0);

      // call two
      expect(mockedCallback.mock.calls[1][0]).toBe(123);
      expect(mockedCallback.mock.calls[1][1]).toBe("abc");
      expect(mockedCallback.mock.calls[1][2]).toBe(1);
    });

    test("reduces correctly", () => {
      expect(reduce(nums, (total, num) => (total += num))).toBe(6);
      expect(
        reduce(
          numsLetters,
          (total, item) => (isNaN(item) ? total + item : total),
          ""
        )
      ).toBe("abc");
      expect(
        reduce(names, (mapping, name) => ({ ...mapping, [name]: true }), {})
      ).toEqual({ bill: true, jim: true, steve: true });
    });
  });

  xdescribe("find", () => {
    test("returns null when item is not found", () => {
      expect(find([1, 2, 3], (num) => num === 4)).toBe(null);
    });

    test("returns the found item", () => {
      const people = [{ name: "bill" }, { name: "steve" }, { name: "dave" }];
      expect(find(people, (person) => person.name === "steve")).toEqual({
        name: "steve",
      });
    });
  });
});
