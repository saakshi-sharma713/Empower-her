import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";


export default function FeedbackForm() {
  const [formData, setFormData] = useState({ 
    name: "",
    email: "",
    feedback: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Textarea
              name="feedback"
              placeholder="Write your feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {submittedData && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Submitted Feedback</CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Feedback:</strong> {submittedData.feedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
