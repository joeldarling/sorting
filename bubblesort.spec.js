describe('Bubble Sort', function(){

  describe('Bubble Sort', function(){


      it('handles an empty array', function(){
          expect( bubbleSort([]) ).toEqual( [] );
      });
      it('handles a single-item array', function(){
          expect(bubbleSort([5])).toEqual([5]);
      });
      it('handles an array with multiple items', function(){
          expect( bubbleSort([12, 4, 9, 2, 1]) ).toEqual( [1, 2, 4, 9, 12] );
      });
  });
});
