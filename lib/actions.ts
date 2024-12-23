"use server";

type CurrentState = { success: boolean; error: boolean };

export const deleteStudent = async (currentState: CurrentState, data: FormData) => {
	const id = data.get("id") as string;
	try {
		console.log(id);
		// revalidatePath("/list/class");
		return { success: true, error: false };
	} catch (err) {
		console.log(err);
		return { success: false, error: true };
	}
};
