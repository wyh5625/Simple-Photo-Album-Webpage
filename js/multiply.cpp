#include <iostream>
void matrixSelfMul(int** input, int** output, int n);
using namespace std;

int main(){
	int n;
	cout << "Please input the size of matrix: ";
	cin >> n;
	int** matrix;
	int** resultMatrix;
	int** expMat;
	matrix = new int*[n];
	resultMatrix = new int*[n];
	expMat = new int*[n];
	for(int i = 0; i < n; i++){
		matrix[i] = new int[n];
		resultMatrix[i] = new int[n];
		expMat[i] = new int[n];
	}
	cout << "Please input a "<< n <<" X "<< n <<"matrix:"<<endl;
	for(int i = 0; i< n; i++)
		for(int j = 0; j<n; j++){
			int ele;
			cin >> ele;
			matrix[i][j] = ele;
		}
	int end;
	cout << "End the loop? Yes(1) | No(0)  ";
	cin >> end;
while(!end){
	for( int i = 0; i<n; i++)
		for(int j=0; j<n; j++){
			expMat[i][j] = matrix[i][j];
		}
	int mulTimes;
	cout << "Times of multiplication A*A: ";
	cin >> mulTimes;
	for(int i = 0; i<mulTimes; i++){
		matrixSelfMul(expMat, resultMatrix, n);
		for(int i = 0; i< n; i++)
			for(int j = 0; j<n; j++)
				expMat[i][j] = resultMatrix[i][j];
	}
	cout << "the result matrix is: "<<endl;
	for(int i=0; i<n; i++){
		for(int j= 0;j<n; j++){
			cout <<expMat[i][j] << " ";
		}
		cout <<endl;
	}
	cout << "End the loop? Yes(1) | No(0)  ";
	cin >> end;
}

	return 0;
}

void matrixSelfMul(int** input, int** output, int n){
	for(int i = 0; i< n; i++)
		for(int j = 0; j<n; j++){
			int sumOfMul = 0;
			for(int s = 0; s < n; s++){
				sumOfMul += input[i][s]*input[s][j];
			}
			output[i][j] = sumOfMul;
		}
}