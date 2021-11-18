import reducer, {getMovies, filterMovies, filterAndSortMovies, sortMovies, searchMovie} from './moviesReducer';
  
  describe('exampleSlice', () => {
    describe('reducers', () => {
      const initialState = {loadingState: 'initial', movies: []}
      
      it('sets loadingState loading when getMovies is pending', () => {
        const action = { type: getMovies.pending.type };
        const state = reducer(initialState, action);
        expect(state).toEqual({loadingState: 'loading', movies: []});
      });
  
      it('sets the fulfilled type and list when getMovies is fulfilled', () => {
        const action = {type: getMovies.fulfilled.type, payload: []};
        const state = reducer(initialState, action);
        expect(state).toEqual({loadingState: 'ready', movies: []});
      });
  
      it('sets fetching false when fetchList is rejected', () => {
          const action = { type: getMovies.rejected.type };
          const state = reducer(initialState, action);
          expect(state).toEqual({loadingState: 'error', movies: []});
        });

        it('sets loadingState loading when getMovies is pending', () => {
          const action = { type: filterAndSortMovies.pending.type };
          const state = reducer(initialState, action);
          expect(state).toEqual({loadingState: 'loading', movies: []});
        });
    
        it('sets the fulfilled type and list when getMovies is fulfilled', () => {
          const action = {type: filterAndSortMovies.fulfilled.type, payload: []};
          const state = reducer(initialState, action);
          expect(state).toEqual({loadingState: 'ready', movies: []});
        });
    
        it('sets fetching false when fetchList is rejected', () => {
            const action = { type: filterAndSortMovies.rejected.type };
            const state = reducer(initialState, action);
            expect(state).toEqual({loadingState: 'error', movies: []});
          });

          it('sets loadingState loading when getMovies is pending', () => {
            const action = { type: filterMovies.pending.type };
            const state = reducer(initialState, action);
            expect(state).toEqual({loadingState: 'loading', movies: []});
          });
      
          it('sets the fulfilled type and list when getMovies is fulfilled', () => {
            const action = {type: filterMovies.fulfilled.type, payload: []};
            const state = reducer(initialState, action);
            expect(state).toEqual({loadingState: 'ready', movies: []});
          });
      
          it('sets fetching false when fetchList is rejected', () => {
              const action = { type: filterMovies.rejected.type };
              const state = reducer(initialState, action);
              expect(state).toEqual({loadingState: 'error', movies: []});
            });

            it('sets loadingState loading when getMovies is pending', () => {
              const action = { type: searchMovie.pending.type };
              const state = reducer(initialState, action);
              expect(state).toEqual({loadingState: 'loading', movies: []});
            });
        
            it('sets the fulfilled type and list when getMovies is fulfilled', () => {
              const action = {type: searchMovie.fulfilled.type, payload: []};
              const state = reducer(initialState, action);
              expect(state).toEqual({loadingState: 'ready', movies: []});
            });
        
            it('sets fetching false when fetchList is rejected', () => {
                const action = { type: searchMovie.rejected.type };
                const state = reducer(initialState, action);
                expect(state).toEqual({loadingState: 'error', movies: []});
              });

              it('sets loadingState loading when getMovies is pending', () => {
                const action = { type: sortMovies.pending.type };
                const state = reducer(initialState, action);
                expect(state).toEqual({loadingState: 'loading', movies: []});
              });
          
              it('sets the fulfilled type and list when getMovies is fulfilled', () => {
                const action = {type: sortMovies.fulfilled.type, payload: []};
                const state = reducer(initialState, action);
                expect(state).toEqual({loadingState: 'ready', movies: []});
              });
          
              it('sets fetching false when fetchList is rejected', () => {
                  const action = { type: sortMovies.rejected.type };
                  const state = reducer(initialState, action);
                  expect(state).toEqual({loadingState: 'error', movies: []});
                });
    });
  
  });