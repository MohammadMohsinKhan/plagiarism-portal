import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// This interface defines the structure of our similarity result
interface SimilarityResult {
  file1: string;
  file2: string;
  similarityPercentage: number;
}

const Results = () => {
  // This would typically come from your backend
  // For now using mock data for demonstration
  const mockResults: SimilarityResult[] = [
    { file1: "student1/assignment.py", file2: "student2/homework.py", similarityPercentage: 95 },
    { file1: "student3/solution.py", file2: "student4/code.py", similarityPercentage: 87 },
    { file1: "student5/main.py", file2: "student6/submission.py", similarityPercentage: 75 },
    { file1: "student7/project.py", file2: "student8/answer.py", similarityPercentage: 65 },
  ].sort((a, b) => b.similarityPercentage - a.similarityPercentage); // Sort by similarity in descending order

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Similarity Results</h1>
        <div className="bg-card rounded-lg shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File 1</TableHead>
                <TableHead>File 2</TableHead>
                <TableHead className="text-right">Similarity %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{result.file1}</TableCell>
                  <TableCell>{result.file2}</TableCell>
                  <TableCell className="text-right">
                    <span 
                      className={`font-medium ${
                        result.similarityPercentage > 80 
                          ? 'text-red-500' 
                          : result.similarityPercentage > 60 
                            ? 'text-yellow-500' 
                            : 'text-green-500'
                      }`}
                    >
                      {result.similarityPercentage}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Results;